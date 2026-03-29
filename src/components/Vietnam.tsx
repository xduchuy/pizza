import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'

const VIETNAM_ITEMS = [
  {
    title: "Seafood & Coconut Curry",
    desc: "A tropical twist featuring fresh local seafood and creamy coconut milk — Vietnamese culinary heritage poured onto a crust.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200"
  },
  {
    title: "Half-and-Half Customization",
    desc: "Why choose? The Vietnamese culture of sharing and balance is perfectly embodied in the beloved split pizza.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1200"
  },
  {
    title: "Spicy Sriracha Swirls",
    desc: "The indispensable heat of local chili sauce swirled across the surface, elevating every slice with bold Vietnamese fire.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1200"
  },
  {
    title: "Vibrant Youth Culture Venues",
    desc: "Modern Vietnamese pizzerias have become dynamic social hubs — spaces designed for the energetic, creative Gen Z.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200"
  }
]

export default function Vietnam() {
  const containerRef = useRef<HTMLDivElement>(null)

  // The container is 500vh tall — scroll drives everything
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Map scroll progress to active item index (0–3)
  const activeIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3])

  return (
    // Outer wrapper is tall to allow scroll-driven animation
    <div id="vietnam" ref={containerRef} style={{ height: '500vh' }} className="relative">
      
      {/* Sticky inner panel that stays fixed while user scrolls through */}
      <div className="sticky top-0 h-screen overflow-hidden bg-background flex items-center">

        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-tomato/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-basil/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12 items-center">

          {/* LEFT: Title + Items list */}
          <div className="lg:w-5/12 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-basil mb-4 font-semibold">
                <span>Local Flavor</span>
                <div className="w-1.5 h-1.5 rounded-full bg-basil" />
                <span>Global Spirit</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-crust">
                Pizza in <span className="text-transparent bg-clip-text bg-gradient-to-r from-tomato to-oven">Vietnam</span>
              </h2>
            </div>

            {/* Animated item list */}
            <div className="space-y-2">
              {VIETNAM_ITEMS.map((item, i) => (
                <ScrollItem
                  key={i}
                  item={item}
                  index={i}
                  activeIndex={activeIndex}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Full image driven by scroll */}
          <div className="lg:w-7/12 h-[55vh] lg:h-[75vh] relative rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <IndexedImage activeIndex={activeIndex} />
            </AnimatePresence>
            {/* Progress indicator */}
            <ProgressDots activeIndex={activeIndex} total={VIETNAM_ITEMS.length} />
          </div>

        </div>
      </div>
    </div>
  )
}

// Child that reads activeIndex motion value reactively
function ScrollItem({ item, index, activeIndex }: { item: any; index: number; activeIndex: any }) {
  return (
    <motion.div
      style={{
        opacity: useTransform(activeIndex, (v: number) => {
          const diff = Math.abs(Math.round(v) - index)
          return diff === 0 ? 1 : 0.35
        }),
      }}
      className="flex flex-col gap-2 border-b border-white/10 pb-4 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <motion.div
          style={{
            backgroundColor: useTransform(activeIndex, (v: number) =>
              Math.round(v) === index ? 'rgb(94 139 74)' : 'rgba(94,139,74,0.2)'
            ),
            color: useTransform(activeIndex, (v: number) =>
              Math.round(v) === index ? '#F7E7CE' : '#5E8B4A'
            )
          }}
          className="w-8 h-8 rounded-full flex items-center justify-center font-serif text-sm flex-shrink-0 transition-colors"
        >
          {index + 1}
        </motion.div>
        <motion.span
          style={{
            color: useTransform(activeIndex, (v: number) =>
              Math.round(v) === index ? '#5E8B4A' : 'rgba(247,231,206,0.7)'
            )
          }}
          className="font-medium text-lg"
        >
          {item.title}
        </motion.span>
      </div>

      {/* Expandable description */}
      <motion.div
        style={{
          height: useTransform(activeIndex, (v: number) => Math.round(v) === index ? 'auto' : '0px'),
          opacity: useTransform(activeIndex, (v: number) => Math.round(v) === index ? 1 : 0),
        }}
        className="overflow-hidden pl-12"
      >
        <p className="text-sm text-crust/60 leading-relaxed">{item.desc}</p>
      </motion.div>
    </motion.div>
  )
}

function IndexedImage({ activeIndex }: { activeIndex: any }) {
  const index = Math.round(activeIndex.get())
  const item = VIETNAM_ITEMS[Math.max(0, Math.min(index, VIETNAM_ITEMS.length - 1))]

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent z-10" />
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-6 left-6 z-20">
        <h3 className="text-2xl font-serif text-white drop-shadow-lg">{item.title}</h3>
      </div>
    </motion.div>
  )
}

function ProgressDots({ activeIndex, total }: { activeIndex: any; total: number }) {
  return (
    <div className="absolute bottom-6 right-6 z-20 flex gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            width: useTransform(activeIndex, (v: number) => Math.round(v) === i ? '24px' : '8px'),
            backgroundColor: useTransform(activeIndex, (v: number) =>
              Math.round(v) === i ? '#5E8B4A' : 'rgba(247,231,206,0.3)'
            )
          }}
          className="h-2 rounded-full transition-all"
        />
      ))}
    </div>
  )
}
