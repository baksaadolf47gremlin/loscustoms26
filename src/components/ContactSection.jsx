import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isHuman, setIsHuman] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isHuman) return;
    setIsSubmitting(true)

    const formData = new FormData(e.target)
    // Itt injektáljuk a frissített éles kulcsodat:
    formData.append("access_key", "d5e48e41-a88b-45d3-8d44-3ea3ff3890d0")
    formData.append("subject", "Új üzenet a Los Customs weboldalról!")
    formData.append("from_name", "Los Customs Üzenet")

    try {
      const object = Object.fromEntries(formData)
      const json = JSON.stringify(object)

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })
      
      const text = await response.text()
      let data
      try {
        data = JSON.parse(text)
      } catch {
        console.error('Web3Forms non-JSON response:', text.slice(0, 200))
        alert("A form jelenleg nem érhető el. Kérjük hívj minket telïonon!")
        return
      }
      
      if (data.success) {
        setIsSubmitted(true)
        e.target.reset()
      } else {
        alert("Hiba történt a küldés során: " + data.message)
      }
    } catch (error) {
      alert("Hálózati hiba. Kérjük próbáld újra később!")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full py-12 lg:py-16 overflow-hidden">
      {/* Feltöltött, sötét garázs háttérkép */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/contact-bg.webp')` }}
      />
      
      {/* Nagyon erős, sötétítő réteg a háttérködös, drámai hatásért (85% fekete) */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Grid mintázat vékonyan ráhúzva (opcionális, ha hiányozna) */}
      <div className="absolute inset-0 honeycomb-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Form Container like the provided image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          
          {/* Left Side: Info */}
          <div className="flex flex-col gap-8 lg:pr-12">
             <div>
               <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-2 uppercase tracking-wide">
                 Foglalj <br/>
                 <span className="text-accent">Időpontot</span>
               </h2>
               <p className="text-light/70 text-sm sm:text-base mt-6 max-w-md">
                 Hívj fel vagy küldj üzenetet szívesen segítünk az autód szépítésében
               </p>
             </div>

             <div className="flex flex-col gap-6 mt-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-light/50 font-semibold mb-1">Telefon</h4>
                    <p className="text-light text-sm font-medium">+36 70 333 9809</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-light/50 font-semibold mb-1">Email</h4>
                    <p className="text-light text-sm font-medium">info@los-customs.hu</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-light/50 font-semibold mb-1">Cím</h4>
                    <p className="text-light text-sm font-medium">1205 Budapest, Határ út 70.</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-accent" />
                  </div>
                  <div>
                     <h4 className="text-[10px] uppercase tracking-widest text-light/50 font-semibold mb-1">Nyitva tartás</h4>
                     <p className="text-light text-sm font-medium">H–P: 08:00 – 18:00 | Sz: 08:00 – 14:00</p>
                  </div>
                </div>
             </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-black/80 p-6 sm:p-8 border border-white/10 rounded-lg shadow-2xl">
             <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-widest text-light/60 font-semibold">Név</label>
                     <input type="text" name="Nev" placeholder="Teljes név" className="bg-white/5 border border-white/10 p-3 text-sm text-light placeholder-light/30 focus:outline-none focus:border-accent transition-colors rounded-none" required />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-widest text-light/60 font-semibold">Email</label>
                     <input type="email" name="E-mail" placeholder="email@example.com" className="bg-white/5 border border-white/10 p-3 text-sm text-light placeholder-light/30 focus:outline-none focus:border-accent transition-colors rounded-none" required />
                   </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-light/60 font-semibold">Telefon</label>
                  <input type="tel" name="Telefonszam" placeholder="+36 00 XXX XXXX" className="bg-white/5 border border-white/10 p-3 text-sm text-light placeholder-light/30 focus:outline-none focus:border-accent transition-colors rounded-none" required />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-light/60 font-semibold">Üzenet</label>
                  <textarea name="Uzenet" rows="4" placeholder="Írd le az autód típusát és az igényeidet..." className="bg-white/5 border border-white/10 p-3 text-sm text-light placeholder-light/30 focus:outline-none focus:border-accent transition-colors resize-none rounded-none" required></textarea>
                </div>

                {/* Interactive Mock Cloudflare Turnstile */}
                <div 
                  className="flex items-center justify-between bg-white/5 border border-white/20 p-4 rounded-sm cursor-pointer select-none group"
                  onClick={() => setIsHuman(true)}
                >
                  <div className="flex items-center gap-3">
                     <div className="w-5 h-5 border border-white/30 rounded-sm flex items-center justify-center p-0.5">
                        <div className={`w-full h-full bg-accent rounded-sm transition-opacity ${isHuman ? 'opacity-100' : 'opacity-0'}`} />
                     </div>
                     <span className="text-sm font-medium text-light/80">I am human</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-light/70 tracking-widest leading-none">CLOUDFLARE</span>
                    <div className="text-[8px] text-light/40 flex gap-1 mt-1">
                      <span className="hover:underline">Privacy</span> • <span className="hover:underline">Terms</span>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted || !isHuman} 
                  className={`w-full font-bold tracking-widest uppercase py-4 transition-colors font-heading text-sm disabled:cursor-not-allowed ${
                    isSubmitted 
                      ? "bg-green-500 text-white" 
                      : "bg-accent hover:bg-[#E5A800] text-black disabled:opacity-70"
                  }`}
                >
                  {isSubmitting ? "Küldés folyamatban..." : isSubmitted ? "Elküldve!" : "Üzenet küldése"}
                </button>

                {isSubmitted && (
                  <p className="text-green-500 text-sm text-center font-medium">
                    Üzenet sikeresen elküldve! Hamarosan keresünk.
                  </p>
                )}
             </form>
          </div>
        </div>

        {/* GTA Map Section */}
        <div className="mt-24 w-full flex flex-col items-center">
          <div className="iframe-map w-full max-w-2xl aspect-square sm:aspect-video relative overflow-hidden border-2 border-white/20 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] filter grayscale-[50%] contrast-[1.2]">
            {/* Real map could be an iframe or dynamic map, using a placeholder for now to mimic GTA map aesthetics */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.9859354832874!2d19.108586799999998!3d47.451213599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c2cb20d0a9b1%3A0x8a21732836077080!2zQnVkYXBlc3QsIEhhdMOhciDDunQgNzAsIDEyMDU!5e0!3m2!1shu!2shu!4v1776791182414!5m2!1shu!2shu" 
                className="absolute inset-0 w-full h-full opacity-60" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }} 
                allowFullScreen="" 
                title="Los Customs Budapest Telephely"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute inset-0 bg-black/20 pointer-events-none mix-blend-overlay"></div>
          </div>
          <p className="mt-6 text-light font-bold text-lg tracking-wider">1205 Budapest Határ út 70.</p>
        </div>

      </div>
    </section>
  )
}

export default ContactSection
