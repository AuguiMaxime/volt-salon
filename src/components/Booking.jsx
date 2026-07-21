import { useState } from 'react'

const initialForm = { nom: '', email: '', telephone: '', prestation: '', date: '' }

function validate(form) {
  const errors = {}
  if (form.nom.trim().length < 2) errors.nom = 'Nom requis.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Email invalide.'
  if (!/^(\+33|0)[1-9](\s?\d{2}){4}$/.test(form.telephone.trim())) errors.telephone = 'Numéro invalide (ex: 06 12 34 56 78).'
  if (!form.prestation) errors.prestation = 'Choisis une prestation.'
  if (!form.date) errors.date = 'Choisis une date.'
  return errors
}

export default function Booking() {
  const [form, setForm] = useState(initialForm)
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const next = { ...form, [name]: value }
    setForm(next)
    if (touched[name]) setErrors(validate(next))
  }
  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(form))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const allErrors = validate(form)
    setErrors(allErrors)
    setTouched({ nom: true, email: true, telephone: true, prestation: true, date: true })
    if (Object.keys(allErrors).length > 0) return
    setSent(true)
    setForm(initialForm)
    setTouched({})
  }

  return (
    <section className="booking" id="booking">
      <div className="wrap booking-grid">
        <div className="booking-intro">
          <p className="eyebrow">Book a slot</p>
          <h2>Réserver un créneau</h2>
          <p>Confirmation par SMS sous 24h. Pour un projet event (mariage, clip, shooting), précise-le dans ta demande.</p>
          <ul className="booking-details mono">
            <li>05 61 90 00 00</li>
            <li>hello@volt-studio.fr</li>
            <li>Mar–sam, 10h–20h</li>
          </ul>
        </div>

        <form className="terminal-form" onSubmit={handleSubmit} noValidate>
          <div className="terminal-bar mono">
            <span className="dotr"></span><span className="doty"></span><span className="dotg"></span>
            <span className="terminal-title">booking@volt:~</span>
          </div>
          <div className="terminal-body">
            <div className="field">
              <label htmlFor="nom" className="mono">&gt; nom</label>
              <input id="nom" name="nom" value={form.nom} onChange={handleChange} onBlur={handleBlur} />
              {touched.nom && errors.nom && <span className="error">{errors.nom}</span>}
            </div>
            <div className="field">
              <label htmlFor="email" className="mono">&gt; email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} />
              {touched.email && errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor="telephone" className="mono">&gt; tel</label>
              <input id="telephone" name="telephone" value={form.telephone} onChange={handleChange} onBlur={handleBlur} placeholder="06 12 34 56 78" />
              {touched.telephone && errors.telephone && <span className="error">{errors.telephone}</span>}
            </div>
            <div className="field">
              <label htmlFor="prestation" className="mono">&gt; service</label>
              <select id="prestation" name="prestation" value={form.prestation} onChange={handleChange} onBlur={handleBlur}>
                <option value="">sélectionner…</option>
                <option value="coupe">Coupe</option>
                <option value="couleur">Couleur</option>
                <option value="soin">Soin</option>
                <option value="event">Styling event</option>
              </select>
              {touched.prestation && errors.prestation && <span className="error">{errors.prestation}</span>}
            </div>
            <div className="field field-full">
              <label htmlFor="date" className="mono">&gt; date_heure</label>
              <input id="date" name="date" type="datetime-local" value={form.date} onChange={handleChange} onBlur={handleBlur} />
              {touched.date && errors.date && <span className="error">{errors.date}</span>}
            </div>

            <button type="submit" className="btn-submit field-full mono">[ ENVOYER ]</button>
            {sent && <p className="success field-full mono">&gt; demande envoyée — réponse sous 24h.</p>}
          </div>
        </form>
      </div>

      <style>{`
        .booking{ padding: 100px 0; }
        .booking-grid{ display:grid; gap: 44px; }
        @media (min-width: 900px){ .booking-grid{ grid-template-columns: 0.8fr 1.2fr; } }
        .booking-intro h2{ font-size: clamp(1.8rem,4vw,2.4rem); margin: 4px 0 18px; }
        .booking-intro p{ color: var(--muted); max-width: 40ch; margin-bottom: 22px; }
        .booking-details{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; font-size:0.85rem; color: var(--cyan); }

        .terminal-form{ background: var(--panel); border: 1px solid var(--panel-line); border-radius: 6px; overflow:hidden; }
        .terminal-bar{ display:flex; align-items:center; gap:8px; padding:12px 16px; background:#0E0E16; border-bottom:1px solid var(--panel-line); }
        .terminal-bar span.dotr, .terminal-bar span.doty, .terminal-bar span.dotg{ width:10px; height:10px; border-radius:50%; }
        .dotr{ background:#F72585; } .doty{ background:#F7C325; } .dotg{ background:#0AEFFF; }
        .terminal-title{ margin-left:10px; font-size:0.78rem; color: var(--muted); }

        .terminal-body{ display:grid; grid-template-columns:1fr 1fr; gap:18px; padding:26px; }
        .field{ display:flex; flex-direction:column; gap:6px; }
        .field-full{ grid-column:1/-1; }
        .field label{ font-size:0.78rem; color: var(--cyan); }
        .field input, .field select{
          font-family: var(--font-body); padding:12px 14px; border:1px solid var(--panel-line);
          border-radius:3px; background:#0E0E16; color: var(--paper); font-size:0.95rem;
        }
        .field input:focus, .field select:focus{ border-color: var(--cyan); }
        .error{ color: var(--magenta); font-size:0.78rem; }
        .btn-submit{
          background: var(--magenta); color: var(--black); border:none; padding:15px 20px;
          border-radius:3px; font-weight:700; cursor:pointer; letter-spacing:0.05em;
          box-shadow: 0 0 20px rgba(247,37,133,0.4);
          transition: box-shadow 0.2s ease, transform 0.15s ease;
        }
        .btn-submit:hover{ box-shadow: 0 0 30px rgba(247,37,133,0.65); transform: translateY(-2px); }
        .success{ color: var(--cyan); font-size:0.88rem; }
      `}</style>
    </section>
  )
}
