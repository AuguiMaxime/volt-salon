import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#transform', label: 'Transform' },
    { href: '#team', label: 'Team' },
    { href: '#booking', label: 'Réserver' },
  ]

  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#top" className="brand" data-text="VOLT">VOLT</a>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>

        <button
          className={`burger ${open ? 'burger-open' : ''}`}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <style>{`
        .header{
          position:sticky; top:0; z-index:50;
          background: rgba(10,10,15,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--panel-line);
        }
        .header-inner{ display:flex; align-items:center; justify-content:space-between; height:78px; }

        .brand{
          font-family: var(--font-display); font-weight:900; font-size:1.5rem;
          color: var(--paper); position:relative; letter-spacing:0.05em;
        }
        .brand::before, .brand::after{
          content: attr(data-text);
          position:absolute; left:0; top:0; width:100%; height:100%;
          background: var(--black); overflow:hidden; clip-path: inset(0 0 0 0);
        }
        .brand::before{ color: var(--magenta); animation: glitch-1 4s infinite linear; }
        .brand::after{ color: var(--cyan); animation: glitch-2 4s infinite linear; }
        @keyframes glitch-1{
          0%, 92%, 100%{ clip-path: inset(0 0 100% 0); transform: translate(0); }
          93%{ clip-path: inset(10% 0 60% 0); transform: translate(-2px,1px); }
          95%{ clip-path: inset(50% 0 20% 0); transform: translate(2px,-1px); }
          97%{ clip-path: inset(0 0 100% 0); }
        }
        @keyframes glitch-2{
          0%, 90%, 100%{ clip-path: inset(0 0 100% 0); transform: translate(0); }
          91%{ clip-path: inset(60% 0 5% 0); transform: translate(2px,0); }
          94%{ clip-path: inset(15% 0 70% 0); transform: translate(-2px,1px); }
          96%{ clip-path: inset(0 0 100% 0); }
        }

        .nav{ display:none; gap: 30px; }
        .nav a{ font-size:0.95rem; font-weight:600; text-transform:uppercase; letter-spacing:0.04em; position:relative; padding-bottom:4px; }
        .nav a::after{
          content:''; position:absolute; left:0; bottom:0; width:100%; height:2px;
          background: var(--magenta); box-shadow: 0 0 8px var(--magenta);
          transform:scaleX(0); transform-origin:left; transition: transform 0.25s ease;
        }
        .nav a:hover::after{ transform:scaleX(1); }
        @media (min-width:820px){ .nav{ display:flex; } }

        .burger{ width:42px; height:42px; border:none; background:none; cursor:pointer; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; }
        .burger span{ width:24px; height:2px; background:var(--cyan); box-shadow:0 0 6px var(--cyan); transition:transform 0.25s ease, opacity 0.25s ease; }
        .burger-open span:nth-child(1){ transform: translateY(8px) rotate(45deg); }
        .burger-open span:nth-child(2){ opacity:0; }
        .burger-open span:nth-child(3){ transform: translateY(-8px) rotate(-45deg); }
        @media (min-width:820px){ .burger{ display:none; } }

        .nav-open{
          display:flex; flex-direction:column; position:absolute; top:78px; left:0; right:0;
          background: var(--black); border-bottom:1px solid var(--panel-line); padding: 8px 24px 20px;
        }
        .nav-open a{ padding:14px 0; border-top:1px solid var(--panel-line); }
      `}</style>
    </header>
  )
}
