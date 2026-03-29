import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Flame, Leaf, Wheat } from 'lucide-react'

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const MENU_ITEMS = [
  {
    name: "Classic Neapolitan",
    description: "San Marzano tomato sauce, fresh buffalo mozzarella, basil, extra virgin olive oil.",
    price: "$18",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800",
    tags: [{ icon: <Leaf className="w-3 h-3" />, text: "Vegetarian" }, { icon: <Flame className="w-3 h-3" />, text: "Wood Fired" }]
  },
  {
    name: "Truffle Mushroom Forest",
    description: "White base, wild mushrooms, truffle oil, mozzarella, parmesan, fresh thyme.",
    price: "$24",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800",
    tags: [{ icon: <Leaf className="w-3 h-3" />, text: "Vegetarian" }]
  },
  {
    name: "Spicy Honey Pepperoni",
    description: "Double pepperoni, tomato sauce, mozzarella, chili flakes, hot honey drizzle.",
    price: "$22",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800",
    tags: [{ icon: <Flame className="w-3 h-3" />, text: "Spicy" }]
  },
  {
    name: "Roman Potato & Rosemary",
    description: "Crispy base, thinly sliced potatoes, rosemary, garlic, sea salt, olive oil.",
    price: "$20",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800",
    tags: [{ icon: <Wheat className="w-3 h-3" />, text: "Crispy" }, { icon: <Leaf className="w-3 h-3" />, text: "Vegan" }]
  }
]

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex justify-end"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-lg bg-surface h-full shadow-2xl border-l border-white/10 overflow-y-auto flex flex-col"
          >
            <div className="sticky top-0 z-10 p-6 flex items-center justify-between border-b border-white/10 bg-surface/90 backdrop-blur-md">
              <h2 className="text-3xl font-serif text-crust">Our Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/5 text-crust/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 flex-1 flex flex-col gap-8">
              {MENU_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col gap-4"
                >
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface/50 backdrop-blur-md border border-white/20 text-xs font-medium text-crust uppercase tracking-wider">
                          {tag.icon} {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-medium text-white font-serif">{item.name}</h3>
                      <span className="text-lg font-bold text-tomato">{item.price}</span>
                    </div>
                    <p className="text-sm text-crust/70 leading-relaxed">{item.description}</p>
                    
                    <button className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-tomato/50 text-tomato font-medium hover:bg-tomato hover:text-white transition-all duration-300">
                      <ShoppingBag className="w-4 h-4" />
                      Add to Order
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-6 border-t border-white/10 bg-surface">
              <button className="w-full py-4 rounded-full bg-tomato text-white font-medium text-lg shadow-[0_0_20px_rgba(179,49,31,0.3)] hover:shadow-[0_0_30px_rgba(179,49,31,0.5)] transition-shadow">
                Checkout ($0.00)
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
