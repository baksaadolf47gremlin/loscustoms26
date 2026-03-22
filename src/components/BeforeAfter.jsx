import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Lámpa polír',
    image: '/images/work/image-10.png',
  },
  {
    title: 'Tetőkárpit csere',
    image: '/images/work/image-14-1.png',
  },
  {
    title: 'Teljes kaszni',
    image: '/images/work/image-17.png',
  },
  {
    title: 'Teljes belső tisztítás',
    image: '/images/work/image-43-e1753564268674.png',
  },
]

const BeforeAfter = () => {
  return (
    <section className="relative w-full pb-24 pt-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-3xl md:text-4xl font-black font-heading tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            - Munkáim -
          </motion.h2>
        </div>

        {/* CSS Grid for Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              {/* Image Container with Yellow Border */}
              <div className="w-full aspect-[4/3] overflow-hidden border-[3px] border-accent shadow-[0_5px_15px_rgba(252,185,0,0.2)] bg-black/50 mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {/* Title */}
              <h3 className="text-light text-center text-sm md:text-base font-semibold tracking-wide uppercase">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* View Gallery Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link to="/galeria" className="text-accent hover:text-white transition-colors text-sm font-semibold tracking-wider flex items-center justify-center gap-2">
            Még több munka <span className="text-lg">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default BeforeAfter
