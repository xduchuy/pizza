import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Vietnam() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  const VIETNAM_ITEMS = [
    { title: "Seafood & Coconut Curry", desc: "A tropical twist featuring fresh local seafood and creamy coconut.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800" },
    { title: "Half-and-Half Customization", desc: "Why choose? The culture of sharing perfectly embodied in split pizzas.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800" },
    { title: "Spicy Sriracha Swirls", desc: "The indispensable heat of local chili sauce elevating classical slices.", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800" },
    { title: "Vibrant Youth Culture Venues", desc: "Pizzerias designed as dynamic spaces for the energetic Gen Z.", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800" }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="vietnam" ref={containerRef} className="py-32 bg-background min-h-screen relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-tomato/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-basil/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 text-sm uppercase tracking-widest text-basil mb-4 font-semibold">
            <span>Local Flavor</span>
            <div className="w-1.5 h-1.5 rounded-full bg-basil" />
            <span>Global Spirit</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-crust">
            Pizza in <span className="text-transparent bg-clip-text bg-gradient-to-r from-tomato to-oven">Vietnam</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:h-[600px] w-full mt-8">
          
          <motion.div 
            style={{ y: y1 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-8 h-full"
          >
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-serif leading-tight"
            >
              A Symphony of <br/> <span className="text-basil">Local Ingredients</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-crust/80 font-light leading-relaxed"
            >
              When pizza arrived in Vietnam, it wasn't just adopted; it was lovingly adapted. The rich culinary heritage of Vietnam infused conventional recipes with bold new flavors: from fusion seafood to half-and-half creativity, all tailored to the local palate.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              {VIETNAM_ITEMS.map((item, i) => (
                <div 
                  key={i} 
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex flex-col gap-2 border-b border-white/10 pb-4 cursor-pointer transition-all duration-300 ${activeIndex === i ? 'opacity-100 pl-4 border-basil/50' : 'opacity-50 hover:opacity-80'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-serif transition-colors ${activeIndex === i ? 'bg-basil text-crust' : 'bg-basil/20 text-basil'}`}>
                      {i + 1}
                    </div>
                    <span className={`font-medium text-lg transition-colors ${activeIndex === i ? 'text-basil' : 'text-crust/90'}`}>{item.title}</span>
                  </div>
                  
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-crust/60 pl-12"
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="lg:col-span-7 h-[300px] md:h-[400px] lg:h-full relative grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-4"
          >
            {/* Main large image */}
            <div className="col-span-1 md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden glass-panel group relative">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  src={VIETNAM_ITEMS[activeIndex].image} 
                  alt={VIETNAM_ITEMS[activeIndex].title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[0.1]"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface to-transparent p-6 pt-20 z-10 flex flex-col justify-end">
                <h4 className="text-2xl font-serif text-crust drop-shadow-lg">{VIETNAM_ITEMS[activeIndex].title}</h4>
              </div>
            </div>
            
            {/* Small horizontal image */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden glass-panel group hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=800" 
                alt="Local Vibe" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[0.2]"
              />
            </div>

            {/* Accent colored box */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden glass-panel bg-surface border-basil/20 p-6 flex flex-col justify-center relative group hidden md:flex">
              <div className="absolute inset-0 bg-basil/5 group-hover:bg-basil/10 transition-colors" />
              <p className="text-4xl font-serif text-basil mb-2">"Hợp khẩu vị"</p>
              <p className="text-sm text-crust/60 font-light max-w-[200px]">
                The Vietnamese philosophy of balancing flavors—sweet, salty, sour, and spicy—perfectly applied to pizza.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
