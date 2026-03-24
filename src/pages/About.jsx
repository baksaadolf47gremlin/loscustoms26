import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, CheckCircle } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const About = () => {
  return (
    <main className="bg-primary min-h-screen pt-20">
      {/* Fejléc section */}
      <div className="honeycomb-bg py-24 px-4 overflow-hidden relative">
        <div className="!absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="section-label tracking-widest text-accent mb-4">Rólunk</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-light font-poppins mb-6 uppercase">
              A <span className="text-accent">Los Customs</span> Sztorija
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Precizitás, szenvedély és rugalmasság a megrendelőink szolgálatában.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Magazin / Bento Box tartalom */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Szöveges tartalom (bento kártya) - 7 oszlop */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="bg-card border border-white/5 shadow-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Díszítő elem a kártya sarkában */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

                <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-light mb-8 leading-tight">
                  Több, mint egy <br />
                  <span className="text-accent">autókozmetika</span>
                </h2>

                <div className="space-y-6 text-light/70 text-sm md:text-base leading-relaxed">
                  <p>
                    A <span className="font-bold text-light">Los Customs</span> autókozmetikai vállalkozást 1 éve alapítottam, a <span className="text-accent font-semibold tracking-wide">GTA V videójáték inspirációjára</span> – innen jött az ötlet és maga a név is. A kezdetektől fogva a maximális eredményre törekszem.
                  </p>
                  
                  <p>
                    Szenvedélyem az autók iránt és a részletekbe menő <span className="text-accent font-semibold">precizitás</span> vezetett oda, hogy ma professzionális szintű külső és belső autókozmetikával foglalkozzam. Szolgáltatásaim közé tartozik a kárpittisztítás, lámpapolírozás, karosszéria polírozás, kerámia bevonatok felvitele és még rengeteg egyedi kezelés.
                  </p>

                  <div className="bg-white/5 border-l-4 border-accent p-6 rounded-r-lg my-8 shadow-inner">
                    <p className="italic text-light/90">
                      Amitől igazán különleges vagyok, az a <span className="text-accent font-bold not-italic">mobilitás</span>: teljes felszereléssel <span className="text-accent font-bold not-italic">házhoz megyek</span>, így az ügyfelemnek ki sem kell mozdulnia az otthonából.
                    </p>
                  </div>

                  <p>
                    A legfőbb célom, hogy minden jármű új fényében tündököljön a kezeim alatt, mintha csak most gördült volna ki először a szalonból.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="font-heading text-xl font-bold text-light tracking-wide">
                    Zagyi István
                  </p>
                  <p className="text-accent text-xs font-semibold tracking-widest uppercase mt-1">
                    Alapító / Los Customs
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Képek (kollázs / overlap minta) - 5 oszlop */}
          <div className="lg:col-span-5 relative h-[500px] md:h-[600px] flex items-center justify-center mt-16 lg:mt-0">
            <ScrollReveal delay={0.2} className="w-full h-full relative">
              
              {/* Alap (hátsó) kép - Polírozós (Bal felül) */}
              <div className="absolute top-0 left-2 w-[70%] md:w-[65%] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-500 z-10">
                <img 
                  src="/images/bemutatkozas_kep_1.webp" 
                  alt="Autó polírozás munka közben" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Elülső kép - Fotózkodós (Jobb alul) */}
              <div className="absolute bottom-4 right-2 w-[70%] md:w-[65%] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-accent shadow-[0_0_30px_rgba(232,184,75,0.15)] transform -rotate-3 hover:rotate-0 transition-all duration-500 z-20 hover:z-30">
                <img 
                  src="/images/bemutatkozas_kep_2.webp" 
                  alt="Los Customs alapítója" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Díszítő elem a képek körül */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-accent/20 rounded-full z-0 pointer-events-none"></div>

            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Kapcsolat felhívó sáv */}
      <div className="py-20 px-4 text-center border-t border-white/5 bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 honeycomb-bg opacity-30"></div>
        <ScrollReveal>
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-accent font-heading text-xs font-bold tracking-[0.3em] uppercase mb-4">Házhoz megyünk</p>
            <h3 className="text-2xl md:text-3xl font-bold text-light mb-8">Ne fáradj el hozzánk, levesszük a terhet a válladról.</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/kapcsolat" className="btn-gold shadow-gold">Időpont foglalás</Link>
              <a href="tel:+36307582472" className="btn-outline flex items-center gap-2 bg-black/40"><Phone size={16} className="text-accent" />+36 30 758 2472</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}

export default About
