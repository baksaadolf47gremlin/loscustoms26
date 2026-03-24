import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
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
      
      const data = await response.json()
      
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
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 lg:pr-12"
          >
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
                    <p className="text-light text-sm font-medium">1194 Budapest, Hoffer Albert u. 41.</p>
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
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/80 p-6 sm:p-8 border border-white/10 rounded-lg shadow-2xl"
          >
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

                {/* Mock Cloudflare Turnstile */}
                <div className="flex items-center justify-between bg-white/5 border border-white/20 p-4 rounded-sm">
                  <div className="flex items-center gap-3">
                     <CheckCircle size={20} className="text-green-500" />
                     <span className="text-sm font-medium text-light">Success!</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-light/70 tracking-widest">CLOUDFLARE</span>
                    <div className="text-[8px] text-light/40 flex gap-1">
                      <a href="#" className="hover:underline">Privacy</a> • <a href="#" className="hover:underline">Terms</a>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted} 
                  className={`w-full font-bold tracking-widest uppercase py-4 transition-colors font-heading text-sm disabled:cursor-not-allowed ${
                    isSubmitted 
                      ? "bg-green-500 text-white" 
                      : "bg-accent hover:bg-[#E5A800] text-black disabled:opacity-70"
                  }`}
                >
                  {isSubmitting ? "Küldés folyamatban..." : isSubmitted ? "Elküldve!" : "Üzenet küldése"}
                </button>

                {isSubmitted && (
                  <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-green-500 text-sm text-center font-medium"
                  >
                    Üzenet sikeresen elküldve! Hamarosan keresünk.
                  </motion.p>
                )}
             </form>
          </motion.div>
        </div>

        {/* GTA Map Section */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24 w-full flex flex-col items-center"
        >
          <div className="iframe-map w-full max-w-2xl aspect-square sm:aspect-video relative overflow-hidden border-2 border-white/20 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] filter grayscale-[50%] contrast-[1.2]">
            {/* Real map could be an iframe or dynamic map, using a placeholder for now to mimic GTA map aesthetics */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.924773831805!2d19.141873115624794!3d47.43329997917307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c2c31c77caff%3A0x67ee1c062820cd29!2sBudapest%2C%20Hoffer%20Albert%20u.%2041%2C%201194!5e0!3m2!1sen!2shu!4v1689239845345!5m2!1sen!2shu" 
                className="absolute inset-0 w-full h-full opacity-60" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }} 
                allowFullScreen="" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute inset-0 bg-black/20 pointer-events-none mix-blend-overlay"></div>
          </div>
          <p className="mt-6 text-light font-bold text-lg tracking-wider">1194 Budapest Hoffer Albert 41.</p>
        </motion.div>

      </div>
    </section>
  )
}

export default ContactSection
