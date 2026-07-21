export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="grid-floor" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="wrap hero-inner">
        <p className="eyebrow">Studio capillaire — Toulouse</p>
        <h1 className="glitch-title" data-text="RECHARGE TON LOOK">
          RECHARGE<br />TON LOOK
        </h1>
        <p className="hero-lead">
          Coupe, couleur, soin. Un studio pensé pour ceux qui veulent un
          style qui claque — pas un brushing de plus. Réservation en
          quelques secondes.
        </p>
        <div className="hero-actions">
          <a href="#booking" className="btn btn-magenta">Réserver un créneau</a>
          <a href="#services" className="btn btn-cyan">Voir les services</a>
        </div>
      </div>

      <style>{`
        .hero{
          position:relative; padding: 80px 0 120px; overflow:hidden;
          min-height: 640px; display:flex; align-items:center;
        }
        .grid-floor{
          position:absolute; left:0; right:0; bottom:0; height:55%;
          background-image:
            repeating-linear-gradient(90deg, rgba(10,239,255,0.25) 0 1px, transparent 1px 60px),
            repeating-linear-gradient(0deg, rgba(10,239,255,0.15) 0 1px, transparent 1px 40px);
          transform: perspective(300px) rotateX(60deg);
          transform-origin: bottom;
          mask-image: linear-gradient(to top, black 20%, transparent 90%);
        }
        .hero-glow{
          position:absolute; top:-20%; left:50%; transform:translateX(-50%);
          width:70%; aspect-ratio:1; border-radius:50%;
          background: radial-gradient(circle, rgba(247,37,133,0.22), transparent 70%);
          filter: blur(10px);
        }
        .hero-inner{ position:relative; z-index:2; }

        .glitch-title{
          font-size: clamp(2.4rem, 9vw, 5.2rem);
          color: var(--paper);
          margin-bottom: 26px;
          position: relative;
        }
        .glitch-title::before, .glitch-title::after{
          content: attr(data-text);
          position:absolute; top:0; left:0; width:100%;
          white-space:pre-line;
        }
        .glitch-title::before{ color: var(--magenta); clip-path: inset(0 0 100% 0); animation: title-glitch-1 5s infinite linear; }
        .glitch-title::after{ color: var(--cyan); clip-path: inset(0 0 100% 0); animation: title-glitch-2 5s infinite linear; }
        @keyframes title-glitch-1{
          0%, 94%, 100%{ clip-path: inset(0 0 100% 0); transform:translate(0); }
          95%{ clip-path: inset(20% 0 40% 0); transform:translate(-3px,2px); }
          97%{ clip-path: inset(55% 0 10% 0); transform:translate(3px,-2px); }
        }
        @keyframes title-glitch-2{
          0%, 92%, 100%{ clip-path: inset(0 0 100% 0); transform:translate(0); }
          93%{ clip-path: inset(60% 0 5% 0); transform:translate(3px,0); }
          96%{ clip-path: inset(10% 0 65% 0); transform:translate(-3px,1px); }
        }

        .hero-lead{ max-width: 46ch; color: var(--muted); font-size:1.08rem; margin-bottom: 34px; }
        .hero-actions{ display:flex; flex-wrap:wrap; gap:16px; }

        .btn{
          display:inline-block; font-family:var(--font-body); font-weight:700;
          font-size:0.95rem; text-transform:uppercase; letter-spacing:0.03em;
          padding:14px 28px; border-radius:2px; border:1.5px solid transparent;
          transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .btn:hover{ transform: translateY(-2px); }
        .btn-magenta{ background: var(--magenta); color: var(--black); box-shadow: 0 0 22px rgba(247,37,133,0.45); }
        .btn-magenta:hover{ box-shadow: 0 0 32px rgba(247,37,133,0.7); }
        .btn-cyan{ border-color: var(--cyan); color: var(--cyan); }
        .btn-cyan:hover{ background: rgba(10,239,255,0.08); box-shadow: 0 0 20px rgba(10,239,255,0.3); }
      `}</style>
    </section>
  )
}
