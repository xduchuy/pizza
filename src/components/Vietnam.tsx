import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Vietnam() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

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
              {[
                "Seafood & Coconut Curry",
                "Half-and-Half Customization",
                "Spicy Sriracha Swirls",
                "Vibrant Youth Culture Venues"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="w-8 h-8 rounded-full bg-basil/20 flex items-center justify-center text-basil font-serif">
                    {i + 1}
                  </div>
                  <span className="font-medium text-crust/90">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="lg:col-span-7 h-[300px] md:h-[400px] lg:h-full relative grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-4"
          >
            {/* Main large image */}
            <div className="col-span-1 md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden glass-panel group">
              <img 
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800" 
                alt="Modern Vietnamese House Pizza" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[0.1]"
              />
            </div>
            
            {/* Small horizontal image */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden glass-panel group hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800" 
                alt="Seafood Pizza" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[0.1]"
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
