import { Pizza, Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5 text-crust/60">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4">
            <a href="#" className="flex items-center gap-3 text-tomato mb-6">
              <Pizza className="w-8 h-8" />
              <span className="font-serif text-2xl font-bold tracking-wider text-crust">PIZZA<span className="text-tomato">.</span></span>
            </a>
            <p className="font-light leading-relaxed max-w-sm">
              More than a meal—a culinary heritage. We trace the steps of the greatest dish mankind has ever invented.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h5 className="text-sm font-semibold text-crust uppercase tracking-widest mb-6 border-b border-tomato/30 inline-block pb-1">Explore</h5>
            <ul className="space-y-4">
              {['History', 'Global Maps', 'Styles', 'Brands'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="inline-block hover:text-tomato hover:translate-x-2 transition-all duration-300 text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-sm font-semibold text-crust uppercase tracking-widest mb-6 border-b border-tomato/30 inline-block pb-1">Legal</h5>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
                <li key={link}>
                  <a href="#" className="inline-block hover:text-tomato hover:translate-x-2 transition-all duration-300 text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-sm font-semibold text-crust uppercase tracking-widest mb-6 border-b border-tomato/30 inline-block pb-1">Follow</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-tomato hover:text-white transition-all hover:border-tomato">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-tomato hover:text-white transition-all hover:border-tomato">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-tomato hover:text-white transition-all hover:border-tomato">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wide gap-4 text-center">
          <p>© {new Date().getFullYear()} PIZZA. Premium Documentary Experience.</p>
          <p>Handcrafted with <span className="text-tomato">♥</span> and high hydration dough.</p>
        </div>
      </div>
    </footer>
  )
}
