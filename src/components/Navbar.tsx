import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { Pizza, Menu, X, Globe } from 'lucide-react'

const LINKS = [
  { name: 'History', href: '#history' },
  { name: 'Global', href: '#global' },
  { name: 'Styles', href: '#styles' },
  { name: 'Brands', href: '#brands' },
  { name: 'Vietnam', href: '#vietnam' },
]

export default function Navbar({ onOpenMenu }: { onOpenMenu?: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9])
  const blur = useTransform(scrollY, [0, 100], [0, 8])

  const [isVi, setIsVi] = useState(false);
  const handleTranslate = (e: React.MouseEvent) => {
    e.preventDefault();
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = isVi ? 'en' : 'vi';
      select.dispatchEvent(new Event('change'));
      setIsVi(!isVi);
    }
  };

  return (
    <motion.nav
      style={{
        backgroundColor: `rgba(18, 10, 7, ${bgOpacity.get()})`,
        backdropFilter: `blur(${blur.get()}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-tomato group">
          <Pizza className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-serif text-xl font-bold tracking-wider text-crust">PIZZA<span className="text-tomato">.</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-crust/70 hover:text-tomato transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={handleTranslate} 
            className="flex items-center gap-2 px-4 py-2 bg-surface border border-white/10 rounded-full hover:bg-white/5 transition-colors text-tomato font-medium tracking-wide text-sm"
          >
            <Globe className="w-4 h-4" />
            <span>{isVi ? 'EN' : 'VI'}</span>
          </button>
          <button 
            onClick={onOpenMenu}
            className="px-6 py-2 bg-tomato text-crust font-medium rounded-full hover:bg-tomato/90 transition-colors shadow-[0_0_15px_rgba(179,49,31,0.3)]"
          >
            Order Now
          </button>
        </div>

        {/* Mobile Toggle & Translate */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={handleTranslate}
            className="text-tomato"
          >
            <Globe className="w-6 h-6" />
          </button>
          <button
            className="text-crust"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-surface/95 backdrop-blur-xl border-t border-white/5 py-6 px-6 flex flex-col gap-4"
        >
          {LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-crust/80"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
