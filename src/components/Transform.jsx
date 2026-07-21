import { useCallback, useRef, useState } from 'react'
import { useReveal } from '../useReveal'

function BeforeArt() {
  return (
    <svg viewBox="0 0 300 340" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="340" fill="#1A1A24" />
      <g fill="none" stroke="#5A5A70" strokeWidth="2.2" strokeLinecap="round">
        <path d="M100 90 Q150 60 200 90 Q210 160 195 230 Q150 260 105 230 Q90 160 100 90Z" />
        <path d="M100 95 L70 180" />
        <path d="M200 95 L230 180" />
      </g>
      <text x="150" y="300" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="#8A8AA0">BEFORE</text>
    </svg>
  )
}

function AfterArt() {
  return (
    <svg viewBox="0 0 300 340" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="afterGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F72585" />
          <stop offset="100%" stopColor="#0AEFFF" />
        </linearGradient>
      </defs>
      <rect width="300" height="340" fill="#0A0A0F" />
      <g fill="none" stroke="url(#afterGrad)" strokeWidth="2.4" strokeLinecap="round">
        <path d="M100 90 Q150 50 200 90 Q225 130 190 160 Q225 190 195 230 Q150 265 105 230 Q75 190 110 162 Q75 130 100 90Z" />
        <path d="M100 95 Q65 140 82 185" />
        <path d="M200 95 Q235 140 218 185" />
      </g>
      <text x="150" y="300" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="#0AEFFF">AFTER</text>
    </svg>
  )
}

export default function Transform() {
  const [ref, inView] = useReveal(0.2)
  const trackRef = useRef(null)
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const track = trackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const handlePointerDown = (e) => { dragging.current = true; updateFromClientX(e.clientX) }
  const handlePointerMove = (e) => { if (dragging.current) updateFromClientX(e.clientX) }
  const stopDragging = () => { dragging.current = false }
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 4))
  }

  return (
    <section className="transform-section" id="transform">
      <div className="wrap">
        <p className="eyebrow">Preview</p>
        <h2>Glisse pour voir le résultat</h2>
        <p className="section-lead">Aperçu du type de transformation possible sur un même rendez-vous coupe + couleur.</p>

        <div ref={ref} className={`slider-wrap reveal ${inView ? 'in' : ''}`}>
          <div
            className="slider-track"
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerLeave={stopDragging}
          >
            <div className="art-layer"><AfterArt /></div>
            <div className="art-layer" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
              <BeforeArt />
            </div>
            <div className="handle" style={{ left: `${position}%` }}
                 role="slider" tabIndex={0} aria-label="Curseur avant après"
                 aria-valuenow={Math.round(position)} aria-valuemin={0} aria-valuemax={100}
                 onKeyDown={handleKeyDown}>
              <span className="handle-grip">‹ ›</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .transform-section{ padding: 100px 0; background: var(--panel); border-top:1px solid var(--panel-line); border-bottom:1px solid var(--panel-line); }
        .transform-section h2{ font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 4px 0 14px; }
        .section-lead{ color: var(--muted); max-width: 52ch; margin-bottom: 40px; }

        .slider-wrap{ max-width: 620px; }
        .slider-track{
          position: relative; aspect-ratio: 300/340; max-height:460px;
          border-radius: 4px; overflow:hidden; cursor: ew-resize;
          touch-action:none; user-select:none;
          box-shadow: 0 0 40px rgba(10,239,255,0.12);
          border: 1px solid var(--panel-line);
        }
        .art-layer{ position:absolute; inset:0; }
        .handle{ position:absolute; top:0; bottom:0; width:3px; background: var(--paper); transform: translateX(-50%); box-shadow: 0 0 12px var(--cyan); }
        .handle-grip{
          position:absolute; top:50%; left:50%; transform: translate(-50%,-50%);
          width:42px; height:42px; border-radius:50%; background: var(--black);
          border: 1.5px solid var(--cyan); color: var(--cyan);
          display:flex; align-items:center; justify-content:center; font-size:0.9rem;
          box-shadow: 0 0 16px rgba(10,239,255,0.5);
        }
      `}</style>
    </section>
  )
}
