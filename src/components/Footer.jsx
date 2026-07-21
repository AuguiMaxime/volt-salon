export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <span className="footer-brand">VOLT</span>
          <p className="mono">22 rue Pargaminières, 31000 Toulouse</p>
        </div>
        <nav className="footer-nav mono">
          <a href="#mentions">Mentions légales</a>
          <a href="#confidentialite">Confidentialité</a>
          <a href="#top">Haut de page</a>
        </nav>
        <p className="mono footer-copy">© 2026 VOLT Studio — SIRET 902 114 887 00013</p>
      </div>

      <style>{`
        .footer{ background: var(--black); border-top:1px solid var(--panel-line); color: var(--muted); padding: 44px 0; }
        .footer-inner{ display:flex; flex-wrap:wrap; gap:20px; align-items:center; justify-content:space-between; }
        .footer-brand{ font-family: var(--font-display); font-weight:900; color: var(--cyan); font-size:1.2rem; display:block; margin-bottom:6px; text-shadow: 0 0 10px rgba(10,239,255,0.5); }
        .footer p{ font-size:0.82rem; margin:0; }
        .footer-nav{ display:flex; gap:22px; flex-wrap:wrap; font-size:0.82rem; }
        .footer-nav a:hover{ color: var(--magenta); }
        .footer-copy{ width:100%; font-size:0.7rem; opacity:0.7; margin-top:14px; }
      `}</style>
    </footer>
  )
}
