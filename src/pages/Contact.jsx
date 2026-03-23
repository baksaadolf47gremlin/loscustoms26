import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const contactInfo = [
  {
    icon: <Phone size={20} className="text-accent" />,
    label: 'Telefon',
    value: '+36 70 991 2761',
    sub: '+36 30 758 2472',
    href: 'tel:+36709912761',
  },
  {
    icon: <Mail size={20} className="text-accent" />,
    label: 'E-mail',
    value: 'loscustoms01@gmail.com',
    href: 'mailto:loscustoms01@gmail.com',
  },
  {
    icon: <MapPin size={20} className="text-accent" />,
    label: 'Helyszín',
    value: 'Budapest, 1194',
    sub: 'Hoffer Albert utca 41.',
    href: 'https://maps.google.com/?q=Budapest+1194+Hoffer+Albert+utca+41',
  },
  {
    icon: <Clock size={20} className="text-accent" />,
    label: 'Nyitvatartás',
    value: 'H–P: 08:00 – 18:00',
    sub: 'Hétvégén: egyeztetés szerint',
  },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // replace with actual key
          subject: `Los Customs – Üzenet: ${form.name}`,
          from_name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="bg-primary min-h-screen pt-20">
      {/* Header */}
      <div className="honeycomb-bg py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <p className="section-label">Foglalj időpontot</p>
            <h1 className="section-title mb-4">
              Vedd fel <span>a kapcsolatot</span>
            </h1>
            <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
              Írj vagy hívj, és megbeszéljük, hogyan tudok segíteni az autód rendbe hozásában.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="left">
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="glass-card p-5 flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-muted text-xs font-medium tracking-wide mb-1">{info.label}</p>
                      <p className="text-light text-sm font-semibold">{info.value}</p>
                      {info.sub && <p className="text-muted text-xs mt-0.5">{info.sub}</p>}
                    </div>
                  </a>
                ) : (
                  <div className="glass-card p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-muted text-xs font-medium tracking-wide mb-1">{info.label}</p>
                      <p className="text-light text-sm font-semibold">{info.value}</p>
                      {info.sub && <p className="text-muted text-xs mt-0.5">{info.sub}</p>}
                    </div>
                  </div>
                )}
              </ScrollReveal>
            ))}

            {/* Map embed */}
            <ScrollReveal delay={0.4} direction="left">
              <div className="glass-card overflow-hidden rounded-2xl h-52 relative">
                <iframe
                  title="Los Customs helyszín"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.3!2d19.1!3d47.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI0JzAwLjAiTiAxOcKwMDYnMDAuMCJF!5e0!3m2!1shu!2shu!4v1234567890!5m2!1shu!2shu"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                />
                {/* Overlay: megakadályozza hogy az egér belépjen az iframe-be (dupla kurzor fix) */}
                <div className="absolute inset-0" style={{ cursor: 'none' }}></div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-3" direction="right">
            <div className="glass-card p-8 h-full">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <CheckCircle size={56} className="text-accent mb-5" />
                  <h3 className="font-heading font-bold text-2xl text-light mb-3">Köszönöm az üzeneted!</h3>
                  <p className="text-muted text-sm">Hamarosan felveszem veled a kapcsolatot.</p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', message: '' }) }}
                    className="btn-outline mt-8"
                  >
                    Új üzenet küldése
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="font-heading font-bold text-xl text-light mb-2">Küldi el üzeneted</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-muted font-medium tracking-wide">Neved *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Pl. Kovács János"
                        className="bg-subtle border border-white/10 rounded-xl px-4 py-3 text-sm text-light placeholder-muted
                          focus:outline-none focus:border-accent/50 focus:bg-white/5 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-muted font-medium tracking-wide">Telefonszám</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+36 70 ..."
                        className="bg-subtle border border-white/10 rounded-xl px-4 py-3 text-sm text-light placeholder-muted
                          focus:outline-none focus:border-accent/50 focus:bg-white/5 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-muted font-medium tracking-wide">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="bg-subtle border border-white/10 rounded-xl px-4 py-3 text-sm text-light placeholder-muted
                        focus:outline-none focus:border-accent/50 focus:bg-white/5 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-muted font-medium tracking-wide">Üzenet *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Írd le, miben segíthetek... (autó típusa, kívánt szolgáltatás, időpont elképzelés)"
                      className="bg-subtle border border-white/10 rounded-xl px-4 py-3 text-sm text-light placeholder-muted
                        focus:outline-none focus:border-accent/50 focus:bg-white/5 transition-all resize-none"
                    />
                  </div>

                  <p className="text-muted text-xs">
                    Az adataidat kizárólag kapcsolatfelvételre használom, harmadik félnek nem adom át.
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-gold flex items-center justify-center gap-2 mt-2"
                  >
                    {status === 'sending' ? (
                      <span>Küldés...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Üzenet küldése</span>
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-400 text-xs text-center">Hiba történt. Kérlek próbáld újra, vagy hívj telefonon.</p>
                  )}
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}

export default Contact
