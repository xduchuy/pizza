import { motion, useScroll, useTransform } from 'framer-motion'
import { UtensilsCrossed } from 'lucide-react'

export default function CTA({ onOpenMenu }: { onOpenMenu?: () => void }) {
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 }
            }
          }}
          className="flex flex-col items-center"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
            className="w-16 h-16 rounded-full border border-tomato/30 flex items-center justify-center mb-8 bg-surface/30 backdrop-blur-md relative"
          >
            <UtensilsCrossed className="w-6 h-6 text-tomato relative z-10" />
            {/* Subtle glow behind icon */}
            <div className="absolute inset-0 bg-tomato/20 blur-md rounded-full pointer-events-none" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-serif font-bold text-crust leading-[1.1] mb-6 drop-shadow-2xl flex flex-wrap justify-center gap-3">
            {["The", "Journey", "Continues"].map((word, i) => (
              <motion.span 
                key={i}
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                className={word === "Continues" ? "text-tomato italic" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl text-crust/80 font-light max-w-2xl mb-12 leading-relaxed drop-shadow-lg"
          >
            Every slice tells a story of culture, passion, and fire. What will your next chapter be?
          </motion.p>
          
          <motion.div 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenMenu}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-tomato text-white font-medium text-lg rounded-full overflow-hidden shadow-[0_0_20px_rgba(179,49,31,0.4)] hover:shadow-[0_0_40px_rgba(179,49,31,0.8)] w-full sm:w-auto transition-shadow"
            >
              <span className="relative z-10 tracking-widest uppercase text-sm">Order Your Story</span>
              <div className="absolute inset-0 bg-gradient-to-r from-oven to-tomato opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenMenu}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-surface/50 backdrop-blur-md border border-crust/30 text-crust font-medium text-lg rounded-full overflow-hidden transition-all hover:bg-crust/5 hover:border-crust/80 w-full sm:w-auto"
            >
              <span className="tracking-widest uppercase text-sm">Discover Our Menu</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
