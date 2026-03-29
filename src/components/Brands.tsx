import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'

const BRANDS = [
  {
    name: "Domino's",
    tagline: "The Delivery Pioneer",
    established: 1960,
    description: "Iconic for its speed, the ExtravaganZZa is loaded with meats, veggies, and extra cheese—a true classic.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800",
    signatureDish: "ExtravaganZZa",
    color: "from-[#006491] to-[#E31837]",
    brandColor: "#006491",
    accentColor: "#E31837",
    logoNode: (
      <div className="flex flex-col items-center gap-0 leading-none">
        <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl" style={{ background: 'linear-gradient(135deg,#006491,#E31837)' }}>
          <span className="text-white font-black text-4xl" style={{ fontFamily: 'serif' }}>D</span>
        </div>
        <span className="text-white font-bold text-xl mt-3" style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}>domino's</span>
      </div>
    ),
    badgeLetter: "D",
  },
  {
    name: "Pizza Hut",
    tagline: "The Sit-Down Classic",
    established: 1958,
    description: "The Original Stuffed Crust changed pizza forever. A ring of melted cheese baked directly into the crust.",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800",
    signatureDish: "Original Stuffed Crust",
    color: "from-[#EE3124] to-[#8B0000]",
    brandColor: "#EE3124",
    accentColor: "#8B0000",
    logoNode: (
      <div className="flex flex-col items-center gap-0 leading-none">
        {/* Circular red Pizza Hut logo */}
        <div className="w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-2xl" style={{ background: '#EE3124', border: '3px solid rgba(255,255,255,0.2)' }}>
          <span className="text-white font-black leading-none" style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.5rem' }}>Pizza</span>
          <span className="text-white font-black leading-none" style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.6rem' }}>Hut</span>
        </div>
      </div>
    ),
    badgeLetter: "H",
  },
  {
    name: "The Pizza Company",
    tagline: "Vietnam's Favourite",
    established: 2001,
    description: "Pizza Di Sản — The legendary signature crust stuffed with sausages, topped with fresh shrimp and vegetables. A true Vietnamese icon.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800",
    signatureDish: "Pizza Di Sản",
    color: "from-[#1A5C1A] to-[#E8222A]",
    brandColor: "#1A5C1A",
    accentColor: "#E8222A",
    logoNode: (
      <div className="flex flex-col items-center gap-0 leading-none">
        <div className="w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-2xl" style={{ background: 'linear-gradient(135deg,#1A5C1A,#E8222A)', border: '3px solid rgba(255,255,255,0.2)' }}>
          <span className="text-white font-black text-xs uppercase tracking-widest text-center leading-tight px-1" style={{ fontFamily: 'sans-serif' }}>THE\nPIZZA</span>
        </div>
        <span className="text-white font-black text-base mt-3 tracking-widest uppercase" style={{ fontFamily: 'sans-serif' }}>THE PIZZA COMPANY</span>
      </div>
    ),
    badgeLetter: "T",
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
            <TiltCard key={i} brand={brand} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TiltCard({ brand, index }: { brand: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [showDish, setShowDish] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setShowDish(!showDish)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-3xl overflow-hidden glass-panel h-[500px] border border-white/5 bg-surface shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer"
    >
      <AnimatePresence mode="wait">
        {!showDish ? (
          /* View 1: LOGO CENTRIC */
          <motion.div 
            key="front"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-surface"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Ambient Brand Gradient Background */}
            <div 
              className="absolute inset-0 opacity-30 z-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at center, ${brand.brandColor}40 0%, transparent 70%)` }}
            />
            
            {/* Brand Logo — custom per-brand node */}
            <div style={{ transform: "translateZ(60px)" }} className="relative z-10 mb-8 flex flex-col items-center">
              {brand.logoNode}
            </div>
            
            <div style={{ transform: "translateZ(40px)" }} className="text-center z-10">
              <h4 className="text-2xl font-serif mb-1 text-crust">{brand.name}</h4>
              <p className="text-sm font-light text-crust/60 uppercase tracking-widest mb-8">Est. {brand.established}</p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-crust/80 text-sm group-hover:bg-white/10 transition-colors">
                <span>Click to reveal dish</span>
                <ExternalLink className="w-3 h-3 text-tomato" />
              </div>
            </div>
          </motion.div>
        ) : (
          /* View 2: SIGNATURE DISH */
          <motion.div 
            key="back"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Dish Image Background */}
            <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />
              <img 
                src={brand.image} 
                alt={brand.signatureDish} 
                className="w-full h-full object-cover sepia-[0.1] contrast-125"
              />
            </div>

            {/* Top Brand Badge (Small) */}
            <div 
              style={{ transform: "translateZ(80px)", background: `linear-gradient(135deg, ${brand.brandColor}, ${brand.accentColor})` }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-30 shadow-2xl border border-white/20"
            >
              <span className="text-white text-sm font-serif font-black">{brand.badgeLetter}</span>
            </div>

            {/* Bottom Dish Info */}
            <div 
              style={{ transform: "translateZ(50px)" }}
              className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-20 pointer-events-none"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-tomato font-bold">Signature Dish</span>
              </div>
              
              <h4 className="text-3xl font-serif mb-3 text-crust drop-shadow-xl">{brand.signatureDish}</h4>
              <p className="text-sm text-crust/90 leading-relaxed font-light drop-shadow-md mb-6">{brand.description}</p>
              
              <div className="flex items-center gap-2 text-xs text-crust/50">
                <ExternalLink className="w-3 h-3 shrink-0" />
                <span>Click to close</span>
              </div>
              
              {/* Decorative line matching brand color */}
              <div className={`w-1/2 h-[3px] bg-gradient-to-r ${brand.color} mt-6 shadow-lg`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
