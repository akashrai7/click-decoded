// src/components/sections/ProofStrip.tsx

const CHIPS = [
  { val: '3×',   text: 'Organic Traffic Growth' },
  { val: '✓',    text: 'Zero Penalty Record' },
  { val: '#1',   text: 'Rankings Delivered' },
  { val: '94%',  text: 'Lead Query Resolution' },
  { val: '500+', text: 'Projects Completed' },
  { val: '48h',  text: 'Report Turnaround' },
  { val: '6.2×', text: 'Average ROAS' },
  { val: '98%',  text: 'Client Retention Rate' },
  { val: '12+',  text: 'Years of Expertise' },
  { val: '0',    text: 'Penalty Risk' },
]

export function ProofStrip() {
  return (
    <div className="proof-strip">
      <div className="proof-label">Trusted results across industries</div>
      <div className="proof-strip-wrap">
        {/* Row 1 — forward */}
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <div className="proof-track">
            {[...CHIPS, ...CHIPS].map((c, i) => (
              <span key={i} className="proof-chip">
                <span className="pc-val">{c.val}</span> {c.text}
              </span>
            ))}
          </div>
        </div>
        {/* Row 2 — reverse */}
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <div className="proof-track rev">
            {[...CHIPS, ...CHIPS].map((c, i) => (
              <span key={i} className="proof-chip">
                <span className="pc-val">{c.val}</span> {c.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
