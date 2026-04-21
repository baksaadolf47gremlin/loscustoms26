import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const contactInfo = [
  {
    icon: <Phone size={20} className="text-accent" />,
    label: 'Telefon',
    value: '+36 30 758 2472',
    sub: '+36 70 991 2761',
    href: 'tel:+36307582472',
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
    value: 'Budapest, 1205',
    sub: 'Határ út 70.',
    href: 'https://maps.google.com/?q=Budapest+1205+Hatar+ut+70',
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
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'd5e48e41-a88b-45d3-8d44-3ea3ff3890d0',
          subject: `Los Customs – Üzenet: ${form.name}`,
          from_name: 'Los Customs Weboldal',
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })
      const text = await res.text()
      let data
      try {
        data = JSON.parse(text)
      } catch {
        // HTML response = API key blocked / invalid
        console.error('Web3Forms non-JSON response (403?):', text.slice(0, 200))
        setStatus('error')
        return
      }
      if (data.success) {
        setStatus('success')
      } else {
        console.error('Web3Forms error:', data.message)
        setStatus('error')
      }
    } catch (err) {
      console.error('Network error:', err)
      setStatus('error')
    }
  }

  return (
    <main className="bg-primary min-h-screen pt-20">
      {/* Header */}
      <div className="honeycomb-bg py-20 px-4 overflow-hidden">
        <div className="!absolute inset-0 flex items-center justify-center pointer-events-none">
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
                <div className="bg-card border border-white/5 rounded-2xl shadow-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-muted text-xs font-medium tracking-wide mb-1">{info.label}</p>
                    <p className="text-light text-sm font-semibold">{info.value}</p>
                    {info.sub && <p className="text-muted text-xs mt-0.5">{info.sub}</p>}
                  </div>
                </div>
              </ScrollReveal>
            ))}

          </div>

          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-3" direction="right">
            <div className="bg-card border border-white/5 rounded-2xl shadow-card p-8 h-full">
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
                  <h2 className="font-heading font-bold text-xl text-light mb-2">Küldd el üzeneted</h2>

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
