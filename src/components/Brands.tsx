import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronRight } from 'lucide-react'

const BRANDS = [
  {
    name: "Domino's",
    tagline: "The Delivery Pioneer",
    established: 1960,
    description: "Changed the game with logistics and the 30-minute delivery guarantee. A tech company that sells pizza.",
    image: "https://images.unsplash.com/photo-1541745537411-b8046ff6be66?q=80&w=800"
  },
  {
    name: "Pizza Hut",
    tagline: "The Sit-Down Classic",
    established: 1958,
    description: "Defined the dine-in pizza experience for a generation with its iconic red roofs and stuffed crust innovation.",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800"
  },
  {
    name: "Papa John's",
    tagline: "Better Ingredients",
    established: 1984,
    description: "Built an empire on the promise of quality ingredients, garlic dipping sauce, and consistent flavor.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800"
  }
]

export default function Brands() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section id="brands" ref={containerRef} className="py-32 bg-surface text-crust overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div>
            <h2 className="text-sm uppercase tracking-widest text-cheese mb-4 font-semibold">The Titans</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Global Brands</h3>
          </div>
          <p className="text-crust/60 max-w-md font-light">
            How a few bold entrepreneurs turned local pizzerias into multi-billion dollar international empires that define modern fast food.
          </p>
        </motion.div>

        <motion.div 
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {BRANDS.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative rounded-3xl overflow-hidden glass-panel h-[500px] border border-white/5 bg-background shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              {/* Image Layer */}
              <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 sepia-[0.2] contrast-125"
                />
              </div>

              {/* Content Layer */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background to-transparent p-8 flex flex-col justify-end z-20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs uppercase tracking-widest text-oven font-bold">Est. {brand.established}</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-surface">
                    <ChevronRight className="w-4 h-4 text-tomato" />
                  </div>
                </div>
                
                <h4 className="text-4xl font-serif mb-2 text-crust group-hover:text-tomato transition-colors">{brand.name}</h4>
                <p className="text-cheese font-medium italic mb-4">{brand.tagline}</p>
                <p className="text-sm text-crust/70 leading-relaxed font-light">{brand.description}</p>
                
                {/* Decorative line */}
                <div className="w-0 h-[1px] bg-gradient-to-r from-tomato to-oven mt-6 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
