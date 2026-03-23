import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Aszf = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 bg-primary text-white relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors mb-8 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Vissza a főoldalra</span>
          </Link>
        </ScrollReveal>
        
      <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-12">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-black text-accent mb-8 font-poppins text-center tracking-tight">
            Általános Szerződési Feltételek
          </h1>

          <div className="space-y-8 text-white/80 leading-relaxed font-inter">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Általános rendelkezések</h2>
              <p>
                A jelen Általános Szerződési Feltételek (továbbiakban: ÁSZF) tartalmazzák a Loscustoms (továbbiakban: Szolgáltató) által nyújtott autókozmetikai és detailing szolgáltatások igénybevételének feltételeit.
              </p>
              <p className="mt-2">
                A szolgáltatások megrendelésével az Ügyfél elfogadja a jelen ÁSZF-ben foglalt feltételeket.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">A Szolgáltató adatai</h2>
              <ul className="space-y-1">
                <li><span className="font-medium text-white/90">Név:</span> Loscustoms</li>
                <li><span className="font-medium text-white/90">Telefonszám:</span> +36307582472</li>
                <li><span className="font-medium text-white/90">E-mail:</span> loscustoms01@gmail.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Szolgáltatások</h2>
              <p className="mb-2">A Szolgáltató az alábbi szolgáltatásokat nyújtja:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Autómosás (külső és belső)</li>
                <li>Polírozás</li>
                <li>Kerámia bevonat</li>
                <li>Kárpittisztítás</li>
                <li>Nano bevonat</li>
                <li>Otthoni kárpit tisztítás</li>
                <li>Egyéb detailing szolgáltatások</li>
              </ul>
              <p>A szolgáltatások részletes leírása és árazása a weboldalon található.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Időpontfoglalás</h2>
              <p>
                Az időpontfoglalás telefonon vagy e-mailben történik. A Szolgáltató az időpont visszaigazolásával kötelezettséget vállal a szolgáltatás elvégzésére.
              </p>
              <p className="mt-2">
                Az Ügyfél köteles az egyeztetett időpontban megjelenni, vagy legalább 24 órával korábban lemondani az időpontot.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Árak és fizetés</h2>
              <p>
                A szolgáltatások árai a weboldalon feltüntetett árak szerint alakulnak. Az árak tartalmazzák az anyagköltséget és a munkadíjat.
              </p>
              <p className="mt-2">
                A fizetés készpénzben vagy utalással történik a szolgáltatás elvégzése után.
              </p>
              <p className="mt-2">
                A Szolgáltató fenntartja a jogot az árak módosítására. Az árak módosítása a már lefoglalt időpontokra nem vonatkozik.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Felelősség</h2>
              <p>A Szolgáltató gondosan végzi munkáját és a szakmai szabályok betartásával dolgozik.</p>
              <p className="mt-2">
                A Szolgáltató nem vállal felelősséget a jármű meglévő károsodásaiért, gyári hibákért vagy az Ügyfél által nem jelentett problémákért.
              </p>
              <p className="mt-2">
                Az Ügyfél köteles a járműben lévő értékeket elvinni vagy biztonságos helyen tárolni.<br />
                A Szolgáltató nem vállal felelősséget a járműben hagyott tárgyakért.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-accent transition-all group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Vissza a főoldalra</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
      </div>
    </main>
  )
}

export default Aszf
