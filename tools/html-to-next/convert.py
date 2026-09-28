#!/usr/bin/env python3
"""
Click Decoded — HTML → Next.js App Router converter.
Reads every page in the HTML project, emits src/app/<route>/page.tsx files
preserving exact content + design (page <style>, JSON-LD, inline scripts).
Also emits redirects.json and routes.json.
"""
import re, os, sys, json, glob
from bs4 import BeautifulSoup, NavigableString, Comment, Tag

SRC = sys.argv[1] if len(sys.argv) > 1 else '/sessions/fervent-trusting-sagan/mnt/Click DECODED'
OUT = sys.argv[2] if len(sys.argv) > 2 else '/sessions/fervent-trusting-sagan/mnt/Click DECODED/clickdecoded-next/src/app'
SITE = 'https://www.clickdecoded.com'

EXCLUDE = {'click_decoded_nav_blueprint', 'clickdecoded', 'index (2)'}

# ── Route map ────────────────────────────────────────────────
CORE = {'index': '', 'about': 'about', 'contact': 'contact', 'pricing': 'pricing',
        'blog': 'blog', 'careers': 'careers', 'internship': 'internship',
        'our-work': 'our-work', 'how-we-work': 'how-we-work', 'honest': 'honest',
        'service-areas': 'service-areas', 'sitemap': 'sitemap'}
LEGAL = {'privacy': 'legal/privacy', 'terms': 'legal/terms', 'cookie-policy': 'legal/cookie-policy'}
BLOGPOSTS = ['ai-automation-guide-indian-businesses-2026', 'seo-guide-indian-businesses-2026',
             'business-website-guide-india-2026']
# location slug normalization (strip city, normalize service names)
LOC_NORM = {'ecommerce-dev': 'ecommerce-development', 'wordpress-dev': 'wordpress-development',
            'social-media': 'social-media-marketing', 'seo-services': 'seo'}

def route_for(name: str) -> str:
    if name in CORE: return CORE[name]
    if name in LEGAL: return LEGAL[name]
    if name in BLOGPOSTS: return f'blog/{name}'
    if name.startswith('industry-'): return f'industries/{name[len("industry-"):]}'
    if name.startswith('whitelabel-'): return f'white-label/{name[len("whitelabel-"):]}'
    for city in ('bhopal', 'indore'):
        if name.endswith('-' + city):
            svc = name[: -len(city) - 1]
            for k, v in LOC_NORM.items():
                if svc == k or svc == v: svc = v
            if svc.endswith('-marketing') and svc.startswith('social-media'): svc = 'social-media-marketing'
            return f'locations/{city}/{svc}'
    svc = 'seo' if name == 'seo-services' else name
    return f'services/{svc}'

pages = sorted(os.path.splitext(os.path.basename(p))[0] for p in glob.glob(os.path.join(SRC, '*.html')))
pages = [p for p in pages if p not in EXCLUDE]
ROUTES = {p: route_for(p) for p in pages}
assert len(set(ROUTES.values())) == len(ROUTES), 'route collision!'

# ── URL rewriting ────────────────────────────────────────────
ASSET_MAP = {
    'clickdecoded.png': '/images/clickdecoded.png',
    'clickdecodedround.png': '/images/clickdecodedround.png',
    'favicon-clickdecoded.svg': '/favicon-clickdecoded.svg',
    'favicon-clickdecoded.png': '/images/favicon-clickdecoded.png',
    'favicon.svg': '/favicon.svg',
    'logo-white.svg': '/images/logo-white.svg',
    'logo-color.svg': '/images/logo-color.svg',
}

def rewrite_url(u: str) -> str:
    if not u: return u
    orig = u
    prefix = ''
    if u.startswith(SITE): prefix, u = '', u[len(SITE):]
    elif u.startswith('https://clickdecoded.com'): u = u[len('https://clickdecoded.com'):]
    elif u.startswith('http'): return orig
    if u.startswith('./'): u = u[2:]
    core = u.lstrip('/')
    # split hash/query
    m = re.match(r'([^#?]*)([#?].*)?$', core)
    path, tail = m.group(1), m.group(2) or ''
    if path in ASSET_MAP: return ASSET_MAP[path] + tail
    if path.startswith('img/'): return '/' + path + tail
    if path.endswith('.html'):
        name = path[:-5]
        if name in ROUTES: return '/' + ROUTES[name] + tail if ROUTES[name] else '/' + tail.lstrip()
        return '/' + name + tail  # unknown page: keep slug
    if path == '' and tail: return tail if tail.startswith('#') else '/' + tail
    if path in ROUTES: return '/' + (ROUTES[path] or '') + tail
    return orig

def rewrite_abs(u: str) -> str:
    """absolute URL for JSON-LD / OG"""
    r = rewrite_url(u)
    if r.startswith('/'): return SITE + ('' if r == '/' else r)
    return r

def rewrite_text_urls(s: str) -> str:
    """rewrite clickdecoded .html URLs inside JSON-LD / scripts"""
    def rep(m):
        return rewrite_abs(m.group(0))
    s = re.sub(r'https?://(?:www\.)?clickdecoded\.com/[A-Za-z0-9\-_.#/]*', rep, s)
    return s

# ── JSX serialization ────────────────────────────────────────
ATTR_MAP = {
    'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'readonly': 'readOnly',
    'maxlength': 'maxLength', 'minlength': 'minLength', 'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus', 'autoplay': 'autoPlay', 'playsinline': 'playsInline',
    'novalidate': 'noValidate', 'colspan': 'colSpan', 'rowspan': 'rowSpan',
    'cellpadding': 'cellPadding', 'cellspacing': 'cellSpacing', 'frameborder': 'frameBorder',
    'allowfullscreen': 'allowFullScreen', 'crossorigin': 'crossOrigin', 'srcset': 'srcSet',
    'datetime': 'dateTime', 'enctype': 'encType', 'spellcheck': 'spellCheck',
    'contenteditable': 'contentEditable', 'accesskey': 'accessKey', 'inputmode': 'inputMode',
    'referrerpolicy': 'referrerPolicy', 'srclang': 'srcLang', 'usemap': 'useMap',
    'itemprop': 'itemProp', 'itemscope': 'itemScope', 'itemtype': 'itemType',
    'fetchpriority': 'fetchPriority', 'formaction': 'formAction',
    # SVG
    'viewbox': 'viewBox', 'preserveaspectratio': 'preserveAspectRatio',
    'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin', 'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset', 'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-opacity': 'strokeOpacity', 'fill-rule': 'fillRule', 'fill-opacity': 'fillOpacity',
    'clip-rule': 'clipRule', 'clip-path': 'clipPath', 'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity', 'gradientunits': 'gradientUnits',
    'gradienttransform': 'gradientTransform', 'patternunits': 'patternUnits',
    'patterntransform': 'patternTransform', 'text-anchor': 'textAnchor',
    'dominant-baseline': 'dominantBaseline', 'alignment-baseline': 'alignmentBaseline',
    'baseline-shift': 'baselineShift', 'font-family': 'fontFamily', 'font-size': 'fontSize',
    'font-weight': 'fontWeight', 'font-style': 'fontStyle', 'letter-spacing': 'letterSpacing',
    'marker-end': 'markerEnd', 'marker-start': 'markerStart', 'marker-mid': 'markerMid',
    'stddeviation': 'stdDeviation', 'flood-color': 'floodColor', 'flood-opacity': 'floodOpacity',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', 'shape-rendering': 'shapeRendering',
    'vector-effect': 'vectorEffect', 'paint-order': 'paintOrder',
    'maskunits': 'maskUnits', 'maskcontentunits': 'maskContentUnits',
    'filterunits': 'filterUnits', 'primitiveunits': 'primitiveUnits',
    'spreadmethod': 'spreadMethod', 'pointer-events': 'pointerEvents',
    'attributename': 'attributeName', 'repeatcount': 'repeatCount', 'keytimes': 'keyTimes',
    'keysplines': 'keySplines', 'calcmode': 'calcMode',
}
BOOL_ATTRS = {'checked', 'selected', 'disabled', 'required', 'multiple', 'hidden', 'open',
              'defer', 'async', 'loop', 'muted', 'controls', 'autoFocus', 'autoPlay',
              'playsInline', 'noValidate', 'readOnly', 'allowFullScreen', 'itemScope'}
VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta',
        'param', 'source', 'track', 'wbr', 'path', 'circle', 'rect', 'line', 'ellipse',
        'polygon', 'polyline', 'stop', 'use', 'animate', 'animatetransform', 'fedropshadow',
        'fegaussianblur', 'feoffset', 'feflood', 'fecomposite', 'feblend', 'femerge​node'}
HANDLER_RE = re.compile(r'^on(click|submit|change|input|mouseover|mouseout|mouseenter|mouseleave|mousedown|mouseup|keydown|keyup|focus|blur)$')

def esc_text(t: str) -> str:
    return (t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
             .replace('{', '&#123;').replace('}', '&#125;'))

def esc_attr(t: str) -> str:
    return t.replace('&', '&amp;').replace('"', '&quot;').replace('{', '&#123;').replace('}', '&#125;')

def css_prop_camel(p: str) -> str:
    p = p.strip()
    if p.startswith('--'): return p
    if p.startswith('-webkit-'): return 'Webkit' + ''.join(w.capitalize() for w in p[8:].split('-'))
    if p.startswith('-moz-'): return 'Moz' + ''.join(w.capitalize() for w in p[5:].split('-'))
    if p.startswith('-ms-'): return 'ms' + ''.join(w.capitalize() for w in p[4:].split('-'))
    parts = p.split('-')
    return parts[0] + ''.join(w.capitalize() for w in parts[1:])

def style_to_obj(s: str) -> str:
    decls = [d for d in s.split(';') if d.strip()]
    out = []
    for d in decls:
        if ':' not in d: continue
        k, v = d.split(':', 1)
        k = css_prop_camel(k); v = v.strip().replace("'", "\\'")
        key = f"'{k}'" if (k.startswith('--')) else k
        out.append(f"{key}: '{v}'")
    return '{{ ' + ', '.join(out) + ' }}'

collected_handlers = []  # (event, code) per page, reset externally

def serialize(node) -> str:
    if isinstance(node, Comment):
        return ''
    if isinstance(node, NavigableString):
        return esc_text(str(node))
    if not isinstance(node, Tag):
        return ''
    name = node.name
    if name in ('script', 'noscript'):  # handled separately
        return ''
    attrs = []
    for k, v in node.attrs.items():
        if isinstance(v, list): v = ' '.join(v)
        kl = k.lower()
        hm = HANDLER_RE.match(kl)
        if hm:
            collected_handlers.append((hm.group(1), v))
            attrs.append(f'data-cd-{hm.group(1)}="{esc_attr(v)}"')
            continue
        if kl == 'style':
            attrs.append(f'style={style_to_obj(v)}')
            continue
        if kl in ('href', 'src', 'action', 'poster'):
            v = rewrite_url(v)
        jk = ATTR_MAP.get(kl, kl)
        if jk in BOOL_ATTRS or (v == '' and not kl.startswith('data-') and kl not in ('alt', 'content', 'value', 'placeholder')):
            attrs.append(jk if jk in BOOL_ATTRS else f'{jk}=""')
            continue
        attrs.append(f'{jk}="{esc_attr(v)}"')
    a = (' ' + ' '.join(attrs)) if attrs else ''
    if name in VOID and not node.contents:
        return f'<{name}{a} />'
    inner = ''.join(serialize(c) for c in node.contents)
    return f'<{name}{a}>{inner}</{name}>'

def tpl_escape(s: str) -> str:
    """escape for JS template literal"""
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

def ts_str(s) -> str:
    return json.dumps(s, ensure_ascii=False)

# ── Per-page conversion ──────────────────────────────────────
def convert_page(name: str):
    global collected_handlers
    html = open(os.path.join(SRC, name + '.html'), encoding='utf-8', errors='ignore').read()
    soup = BeautifulSoup(html, 'html.parser')
    route = ROUTES[name]
    url_path = '/' + route if route else '/'

    # metadata
    md = {}
    t = soup.find('title')
    md['title'] = t.get_text() if t else name
    def meta(n, by='name'):
        m = soup.find('meta', attrs={by: n})
        return m.get('content') if m else None
    md['description'] = meta('description')
    md['keywords'] = meta('keywords')
    robots = meta('robots')
    og = {p: meta(f'og:{p}', 'property') for p in ('title', 'description', 'type', 'url', 'image', 'site_name', 'locale')}
    tw = {p: meta(f'twitter:{p}') or meta(f'twitter:{p}', 'property') for p in ('card', 'title', 'description', 'image')}

    lines = [f"  title: {ts_str(md['title'])},"]
    if md['description']: lines.append(f"  description: {ts_str(md['description'])},")
    if md['keywords']: lines.append(f"  keywords: {ts_str(md['keywords'])},")
    if robots: lines.append(f"  robots: {ts_str(robots)},")
    lines.append(f"  alternates: {{ canonical: {ts_str(url_path)} }},")
    ogl = []
    if og.get('title') or og.get('description'):
        ogl.append(f"    title: {ts_str(og.get('title') or md['title'])},")
        if og.get('description'): ogl.append(f"    description: {ts_str(og['description'])},")
        ogl.append(f"    url: {ts_str(url_path)},")
        if og.get('type'): ogl.append(f"    type: {ts_str(og['type'])},")
        if og.get('site_name'): ogl.append(f"    siteName: {ts_str(og['site_name'])},")
        if og.get('image'): ogl.append(f"    images: [{ts_str(rewrite_abs(og['image']))}],")
        lines.append('  openGraph: {\n' + '\n'.join(ogl) + '\n  },')
    twl = []
    if tw.get('card') or tw.get('title'):
        if tw.get('card'): twl.append(f"    card: {ts_str(tw['card'])},")
        if tw.get('title'): twl.append(f"    title: {ts_str(tw['title'])},")
        if tw.get('description'): twl.append(f"    description: {ts_str(tw['description'])},")
        if tw.get('image'): twl.append(f"    images: [{ts_str(rewrite_abs(tw['image']))}],")
        lines.append('  twitter: {\n' + '\n'.join(twl) + '\n  },')
    meta_block = 'export const metadata: Metadata = {\n' + '\n'.join(lines) + '\n}\n'

    # css
    style = soup.find('style')
    css = style.string if style and style.string else (style.get_text() if style else '')
    css = rewrite_text_urls(css)

    # JSON-LD
    lds = []
    for s in soup.find_all('script', attrs={'type': 'application/ld+json'}):
        txt = s.string or s.get_text()
        if txt and txt.strip():
            lds.append(rewrite_text_urls(txt.strip()))

    # inline page scripts (body order), excluding gtag/header/footer/ld
    scripts = []
    for s in soup.find_all('script'):
        if s.get('type') == 'application/ld+json': continue
        src = s.get('src') or ''
        if src: continue  # gtag loader, header.js, footer.js
        code = s.string or s.get_text()
        if not code or not code.strip(): continue
        if 'dataLayer' in code and len(code) < 300: continue  # gtag config
        scripts.append(rewrite_text_urls(code.strip()))

    # body content
    body = soup.body
    collected_handlers = []
    parts = []
    for child in (body.contents if body else []):
        if isinstance(child, Tag):
            if child.name in ('script', 'noscript'): continue
            cid = child.get('id') or ''
            if cid in ('cd-header', 'cd-footer', 'cd-sticky-shell'): continue
            parts.append(serialize(child))
        elif isinstance(child, NavigableString) and not isinstance(child, Comment):
            parts.append(esc_text(str(child)))
    jsx = '\n      '.join(p for p in parts if p.strip())

    # globalize functions referenced by inline handlers, wrap scripts in IIFE
    handler_fns = set()
    for _, code in collected_handlers:
        handler_fns.update(re.findall(r'([A-Za-z_$][\w$]*)\s*\(', code))
    final_scripts = []
    for code in scripts:
        for fn in handler_fns:
            code = re.sub(r'\bfunction\s+' + re.escape(fn) + r'\s*\(',
                          f'window.{fn} = function(', code)
        final_scripts.append('(function(){\n' + code + '\n})();')

    # assemble page.tsx
    slug_id = (route or 'home').replace('/', '-')
    needs_ps = bool(final_scripts)
    out = []
    out.append('/* eslint-disable */')
    out.append(f'// src/app/{route + "/" if route else ""}page.tsx — generated from {name}.html (do not edit header/footer here)')
    out.append("import type { Metadata } from 'next'")
    if needs_ps:
        out.append("import PageScript from '@/components/chrome/PageScript'")
    out.append('')
    out.append(meta_block)
    out.append('const css = `' + tpl_escape(css) + '`\n')
    for i, ld in enumerate(lds):
        out.append(f'const ld{i} = `' + tpl_escape(ld) + '`\n')
    for i, sc in enumerate(final_scripts):
        out.append(f'const js{i} = `' + tpl_escape(sc) + '`\n')
    out.append('export default function Page() {')
    out.append('  return (')
    out.append('    <>')
    out.append('      <style dangerouslySetInnerHTML={{ __html: css }} />')
    for i in range(len(lds)):
        out.append(f'      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: ld{i} }}}} />')
    out.append('      ' + jsx)
    for i in range(len(final_scripts)):
        out.append(f'      <PageScript id="{slug_id}-{i}" code={{js{i}}} />')
    out.append('    </>')
    out.append('  )')
    out.append('}')
    out.append('')

    dest_dir = os.path.join(OUT, route) if route else OUT
    os.makedirs(dest_dir, exist_ok=True)
    with open(os.path.join(dest_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(out))
    return {'name': name, 'route': url_path, 'scripts': len(final_scripts),
            'handlers': len(collected_handlers), 'ld': len(lds), 'css': len(css)}

if __name__ == '__main__':
    only = sys.argv[3].split(',') if len(sys.argv) > 3 else None
    results = []
    for p in pages:
        if only and p not in only: continue
        try:
            results.append(convert_page(p))
        except Exception as e:
            print(f'FAIL {p}: {e}')
            raise
    print(f'converted {len(results)} pages')
    for r in results[:10]: print(r)
    # redirects + routes manifest
    redirects = []
    for name, route in ROUTES.items():
        dest = '/' + route if route else '/'
        redirects.append({'source': f'/{name}.html', 'destination': dest, 'permanent': True})
        if name != 'index' and ('/' + name) != dest:
            redirects.append({'source': f'/{name}', 'destination': dest, 'permanent': True})
    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'redirects.json'), 'w') as f:
        json.dump(redirects, f, indent=2)
    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'routes.json'), 'w') as f:
        json.dump({n: ('/' + r if r else '/') for n, r in ROUTES.items()}, f, indent=2)
    print('routes:', len(ROUTES), 'redirects:', len(redirects))
