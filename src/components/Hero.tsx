import { motion, useScroll, useTransform } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  
  // Parallax effects
  const bgY = useTransform(scrollY, [0, 800], ['0%', '10%'])
  const textY = useTransform(scrollY, [0, 800], ['0%', '50%'])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Cinematic Background Image */}
      <motion.div 
        style={{ y: bgY, scale: 1.1 }}
        className="absolute inset-x-0 -top-[20%] h-[140%] z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/80 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
        
        {/* Placeholder for high-quality cinematic pizza image */}
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop" 
          alt="Premium Pizza Background" 
          className="w-full h-full object-cover object-center filter brightness-50 contrast-125 sepia-0"
        />
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-oven/20 blur-[120px] rounded-full z-10 mix-blend-screen" />
      </motion.div>

      {/* Floating Particles/Flour Dust Simulation */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-screen">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-crust/40"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl pt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex gap-2 items-center text-tomato font-semibold tracking-widest uppercase mb-4 text-sm md:text-base border border-tomato/30 px-4 py-1.5 rounded-full bg-surface/30 backdrop-blur-md"
        >
          <Flame className="w-5 h-5 text-oven" />
          <span>A Cinematic Journey</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-crust leading-[1.1] mb-6 drop-shadow-2xl"
        >
          A Slice of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tomato via-oven to-cheese text-glow">
            History
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="text-lg md:text-2xl text-crust/80 font-light max-w-2xl mb-10 leading-relaxed drop-shadow-lg"
        >
          From the fiery ovens of Naples to a global phenomenon, experience the art, passion, and culture of pizza.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          <a
            href="#history"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-tomato text-white font-medium text-lg rounded-full overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(179,49,31,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-oven to-tomato opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Start Exploring</span>
            <svg 
              className="w-5 h-5 relative z-10 animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
