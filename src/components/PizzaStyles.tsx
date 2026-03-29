import { motion } from 'framer-motion'
import { Flame, Wind, Droplets } from 'lucide-react'

const PIZZA_STYLES = [
  {
    name: "Neapolitan",
    region: "Naples, Italy",
    description: "The original. Soft, pillowy dough baked at 900°F for just 60 seconds. San Marzano tomatoes, fresh mozzarella, and basil.",
    image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=800",
    features: [
      { icon: <Flame className="w-4 h-4" />, text: "Wood-fired 900°F" },
      { icon: <Droplets className="w-4 h-4" />, text: "High Hydration" }
    ],
    className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
  },
  {
    name: "New York",
    region: "New York City, USA",
    description: "Wide, thin, and foldable. Hand-tossed dough, bright tomato sauce, and shredded mozzarella cheese meant to be eaten on the go.",
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=800",
    features: [
      { icon: <Wind className="w-4 h-4" />, text: "Thin Crust" }
    ],
    className: "col-span-1 lg:col-span-1 row-span-1"
  },
  {
    name: "Chicago Deep Dish",
    region: "Chicago, USA",
    description: "A thick pie-like crust filled with mounds of cheese, toppings, and crowned with a chunky, rich tomato sauce.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800",
    features: [
      { icon: <DatabaseIcon className="w-4 h-4" />, text: "Deep Pan" }
    ],
    className: "col-span-1 lg:col-span-1 row-span-1"
  },
  {
    name: "Roman al Taglio",
    region: "Rome, Italy",
    description: "Baked in rectangular pans and sold by weight. Light, airy, and crisp, featuring creative seasonal toppings.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800",
    features: [
      { icon: <Square className="w-4 h-4" />, text: "Rectangular Pan" }
    ],
    className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
  }
]

// Stand-in icons since we don't have all lucide mapped easily
function DatabaseIcon(props: any) { return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg> }
function Square(props: any) { return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth={2} /></svg> }


export default function PizzaStyles() {
  return (
    <section id="styles" className="py-32 bg-background min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-widest text-oven mb-4 font-semibold">The Anatomy of a Slice</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-crust">Iconic Styles</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {PIZZA_STYLES.map((style, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5 ${style.className}`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={style.image} 
                  alt={style.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/80 to-transparent opacity-80 z-10" />
              <div className="absolute inset-0 bg-tomato/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end h-full">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-oven font-medium text-sm mb-2">{style.region}</p>
                  <h4 className="text-3xl font-serif text-crust mb-3">{style.name}</h4>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
                    <p className="text-crust/80 text-sm mb-4 leading-relaxed line-clamp-2">
                      {style.description}
                    </p>
                    <div className="flex gap-4">
                      {style.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-1.5 text-xs text-crust/60 uppercase tracking-wider bg-surface/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                          {feature.icon}
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
