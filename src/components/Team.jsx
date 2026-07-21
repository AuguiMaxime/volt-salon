import { useReveal } from '../useReveal'

const team = [
  { name: 'Jade Okonkwo', role: 'Fondatrice — color specialist', tag: 'COLOR' },
  { name: 'Théo Ravel', role: 'Coupe & barbier', tag: 'CUT' },
  { name: 'Mila Sung', role: 'Styling événementiel', tag: 'STYLE' },
]

export default function Team() {
  const [ref, inView] = useReveal(0.2)

  return (
    <section className="team" id="team">
      <div className="wrap">
        <p className="eyebrow">The crew</p>
        <h2>Trois artistes, un même labo</h2>

        <div ref={ref} className={`team-grid ${inView ? 'in-view' : ''}`}>
          {team.map((m, i) => (
            <article className="member" key={m.name} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="avatar">
                <span className="mono">{m.tag}</span>
              </div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .team{ padding: 100px 0; }
        .team h2{ font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 4px 0 48px; }
        .team-grid{ display:grid; gap: 32px; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); }
        .member{
          text-align:center;
          opacity:0; transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .team-grid.in-view .member{ opacity:1; transform: translateY(0); }
        .avatar{
          width:96px; height:96px; border-radius:50%; margin:0 auto 18px;
          background: var(--panel); border: 1.5px solid var(--magenta);
          box-shadow: 0 0 24px rgba(247,37,133,0.35);
          display:flex; align-items:center; justify-content:center;
        }
        .avatar span{ font-size:0.72rem; color: var(--magenta); letter-spacing:0.06em; }
        .member h3{ font-size:1.15rem; margin-bottom:4px; color: var(--paper); }
        .member p{ color: var(--muted); font-size:0.86rem; }
      `}</style>
    </section>
  )
}
