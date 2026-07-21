import { useReveal } from '../useReveal'

const services = [
  { id: '01', title: 'Coupe', desc: 'Coupe technique, dégradés nets, finitions rasoir. Diagnostic inclus.', price: '38€', color: 'var(--magenta)' },
  { id: '02', title: 'Couleur', desc: 'Fashion colors, balayage, patine fluo ou pastel. Formulation sur mesure.', price: '65€', color: 'var(--cyan)' },
  { id: '03', title: 'Soin', desc: 'Protocole réparateur cuir chevelu + longueurs, effet immédiat.', price: '32€', color: 'var(--violet)' },
  { id: '04', title: 'Styling event', desc: 'Coiffure de soirée, clip vidéo, shooting. Look sur-mesure.', price: 'sur devis', color: 'var(--magenta)' },
]

export default function Services() {
  const [ref, inView] = useReveal(0.15)

  return (
    <section className="services" id="services">
      <div className="wrap">
        <p className="eyebrow">Menu des services</p>
        <h2>Choisis ton upgrade</h2>

        <div ref={ref} className={`services-grid ${inView ? 'in-view' : ''}`}>
          {services.map((s, i) => (
            <article className="service-card" key={s.id} style={{ '--accent': s.color, transitionDelay: `${i * 90}ms` }}>
              <div className="card-top mono">
                <span>SVC_{s.id}</span>
                <span className="dot"></span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="card-price mono">{s.price}</span>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .services{ padding: 100px 0; }
        .services h2{ font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 4px 0 48px; }
        .services-grid{ display:grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(230px,1fr)); }
        .service-card{
          background: var(--panel); border: 1px solid var(--panel-line);
          padding: 26px 24px; border-radius: 4px; position:relative; overflow:hidden;
          opacity:0; transform: translateY(18px);
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .services-grid.in-view .service-card{ opacity:1; transform: translateY(0); }
        .service-card:hover{ border-color: var(--accent); box-shadow: 0 0 24px color-mix(in srgb, var(--accent) 35%, transparent); }
        .service-card::before{
          content:''; position:absolute; top:0; left:0; width:100%; height:2px;
          background: var(--accent); box-shadow: 0 0 10px var(--accent);
        }
        .card-top{ display:flex; justify-content:space-between; align-items:center; font-size:0.72rem; color: var(--muted); margin-bottom:18px; }
        .dot{ width:7px; height:7px; border-radius:50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); }
        .service-card h3{ font-size:1.25rem; margin-bottom:10px; color: var(--paper); }
        .service-card p{ color: var(--muted); font-size:0.92rem; margin-bottom:20px; }
        .card-price{ font-size:0.9rem; color: var(--accent); }
      `}</style>
    </section>
  )
}
