import { motion, useScroll, useTransform } from 'framer-motion'
import { UtensilsCrossed } from 'lucide-react'

export default function CTA() {
  const { scrollY } = useScroll()
  
  // Create an effect where the background zooms as you scroll down towards the CTA
  const scale = useTransform(scrollY, [2000, 4000], [1, 1.2])

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      
      {/* Background with zoom effect */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0 bg-background"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/60 to-background/90 z-10" />
        <div className="absolute inset-0 bg-tomato/20 mix-blend-multiply z-10 pointer-events-none" />
        
        {/* Deep, rich, focused image of pizza being pulled with cheese string */}
        <img 
          src="https://images.unsplash.com/photo-1571407921350-dfadab28aafe?q=80&w=2670&auto=format&fit=crop" 
          alt="Hot Pizza Slice" 
          className="w-full h-full object-cover object-center filter brightness-50 contrast-125 sepia-[0.2]"
        />
        
        {/* Soft center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-oven/20 blur-[150px] rounded-full z-10 mix-blend-screen" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full border border-tomato/30 flex items-center justify-center mb-8 bg-surface/30 backdrop-blur-md relative">
            <UtensilsCrossed className="w-6 h-6 text-tomato relative z-10" />
            {/* Subtle glow behind icon */}
            <div className="absolute inset-0 bg-tomato/20 blur-md rounded-full pointer-events-none" />
          </div>

          <h2 className="text-5xl md:text-7xl font-serif font-bold text-crust leading-[1.1] mb-6 drop-shadow-2xl">
            The Journey <span className="text-tomato italic">Continues</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-crust/80 font-light max-w-2xl mb-12 leading-relaxed drop-shadow-lg">
            Every slice tells a story of culture, passion, and fire. What will your next chapter be?
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-tomato text-white font-medium text-lg rounded-full overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_40px_rgba(179,49,31,0.6)] w-full sm:w-auto">
              <span className="relative z-10 tracking-widest uppercase text-sm">Order Your Story</span>
              <div className="absolute inset-0 bg-gradient-to-r from-oven to-tomato opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border border-crust/30 text-crust font-medium text-lg rounded-full overflow-hidden transition-all hover:bg-crust/5 hover:border-crust/50 w-full sm:w-auto">
              <span className="tracking-widest uppercase text-sm">Discover Our Menu</span>
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
