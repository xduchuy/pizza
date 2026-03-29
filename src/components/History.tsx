import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const TIMELINE_DATA = [
  {
    year: 'Antiquity',
    title: 'Flatbreads & Origins',
    description: 'Ancient civilizations around the Mediterranean baked flatbreads on hot stones. The Greeks topped their bread (plakous) with herbs, onion, cheese and garlic, while the Persians baked flatbreads with cheese and dates atop their battle shields.',
    image: 'https://images.unsplash.com/photo-1579895914589-cf7af4fbb291?q=80&w=1200'
  },
  {
    year: '18th Century',
    title: 'The Birth in Naples',
    description: 'Naples, a thriving waterfront city, birthed modern pizza. The working poor needed inexpensive food that could be consumed quickly. Flatbreads with various toppings, sold by street vendors, became the staple diet for the lazaroni.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1200'
  },
  {
    year: '1889',
    title: 'Margherita & The Flag',
    description: 'Legend says baker Raffaele Esposito created the Pizza Margherita for Queen Margherita of Savoy. Garnished with tomatoes, mozzarella, and basil, it represented the colors of the Italian flag and elevated pizza from peasant food to royal delight.',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=1200'
  }
]

export default function History() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="history" ref={containerRef} className="relative py-32 bg-background min-h-screen">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23F7E7CE\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-sm uppercase tracking-widest text-tomato mb-4 font-semibold">Roots & Traditions</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-crust">The Origins</h3>
          <p className="mt-6 text-xl text-crust/60 max-w-2xl mx-auto font-light leading-relaxed">
            A humble street food that conquered the world. The story of pizza is the story of civilization, migration, and the pursuit of flavor.
          </p>
        </motion.div>

        <div className="relative">
          {/* Curved Timeline SVG */}
          <div className="absolute top-0 bottom-0 left-[18px] md:left-1/2 md:-translate-x-1/2 w-2">
            <svg 
              className="w-full h-full" 
              viewBox={`0 0 8 ${TIMELINE_DATA.length * 400}`} 
              preserveAspectRatio="none"
            >
              <motion.path
                d={`M4 0 L4 ${TIMELINE_DATA.length * 400}`}
                stroke="#D96A1D"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                style={{ pathLength, opacity: 0.3 }}
              />
              <motion.path
                d={`M4 0 L4 ${TIMELINE_DATA.length * 400}`}
                stroke="#B3311F"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="flex flex-col gap-32">
            {TIMELINE_DATA.map((item, i) => (
              <TimeLineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimeLineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'center 50%']
  })

  // Slower offset for image parallax to make the image appear to stick inside its container
  const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '0%'])

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center justify-between gap-12 group">
      {/* Node */}
      <div className="absolute left-0 md:left-1/2 -translate-x-2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-surface border-4 border-tomato z-20 flex items-center justify-center shadow-[0_0_20px_rgba(179,49,31,0.5)] transition-transform duration-500 group-hover:scale-125">
        <div className="w-2 h-2 rounded-full bg-cheese animate-pulse" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity, y }}
        className={`w-[calc(100%-3.5rem)] self-end md:self-auto md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left md:order-2'}`}
      >
        <span className="inline-block py-1 px-3 border border-tomato/30 rounded-full text-tomato font-serif text-xl mb-4 bg-tomato/5 backdrop-blur-sm">
          {item.year}
        </span>
        <h4 className="text-3xl font-serif text-crust mb-4">{item.title}</h4>
        <p className="text-lg text-crust/70 font-light leading-relaxed">
          {item.description}
        </p>
      </motion.div>

      {/* Image Container with Parallax inner image */}
      <motion.div 
        style={{ opacity, scale }}
        className={`w-[calc(100%-3.5rem)] self-end md:self-auto md:w-5/12 h-[300px] relative rounded-2xl overflow-hidden glass-panel group-hover:shadow-[0_0_40px_rgba(217,106,29,0.15)] transition-shadow duration-700 ${isEven ? 'md:order-2' : ''}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 opacity-70 pointer-events-none" />
        <motion.div
          style={{ y: imageY }}
          className="absolute w-full h-[130%] -top-[15%]"
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover sepia-[0.3] contrast-125 transition-all duration-1000 group-hover:sepia-0"
          />
        </motion.div>
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tomato/50 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tomato/50 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />
      </motion.div>
    </div>
  )
}
