import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

const STATS = [
  { value: "5B+", label: "Pizzas Sold Annually", delay: 0 },
  { value: "190+", label: "Countries Served", delay: 0.2 },
  { value: "350%", label: "Growth Since 1990", delay: 0.4 },
  { value: "10K+", label: "Variations Created", delay: 0.6 }
]

export default function GlobalExpansion() {
  return (
    <section id="global" className="relative py-32 bg-surface text-crust overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-tomato/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-oven/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="w-full lg:w-5/12"
          >
            <div className="flex gap-3 items-center text-tomato font-semibold tracking-widest uppercase mb-6">
              <Globe className="w-5 h-5" />
              <span>Worldwide Phenomenon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              A Global <span className="text-tomato">Empire</span> Built on Dough
            </h2>
            <p className="text-lg text-crust/70 font-light mb-8 leading-relaxed">
              Italian immigrants brought their culinary heritage to the shores of America in the late 19th century. From New York to Chicago, the humble pie evolved, eventually conquering the entire globe.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay, duration: 0.6 }}
                  className="p-6 rounded-2xl glass-panel relative group overflow-hidden border border-white/5 bg-background/30 hover:bg-background/50 transition-colors"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-tomato to-oven transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                  <h4 className="text-4xl font-serif text-cheese mb-2">{stat.value}</h4>
                  <p className="text-sm font-medium text-crust/60 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Map Visualization */}
          <div className="w-full lg:w-7/12 relative aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
            {/* Glowing nodes representing cities */}
            <div className="absolute inset-0 max-w-[600px] max-h-[600px] m-auto">
              {/* Central Map Illustration or Nodes Network */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="relative w-full h-full border border-white/10 rounded-full flex items-center justify-center p-8 bg-gradient-radial from-transparent to-background/50 backdrop-blur-sm"
              >
                {/* Connecting Lines and Pulses */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path 
                    d="M 50 20 Q 70 40 80 50 T 90 70" 
                    stroke="rgba(217,106,29,0.3)" 
                    strokeWidth="0.5" 
                    fill="none" 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M 50 20 Q 30 40 20 50 T 10 70" 
                    stroke="rgba(179,49,31,0.3)" 
                    strokeWidth="0.5" 
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M 50 20 Q 60 50 50 80" 
                    stroke="rgba(242,193,78,0.3)" 
                    strokeWidth="0.5" 
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                  />
                </svg>

                {/* Nodes */}
                {[
                  { top: '20%', left: '50%', name: 'Naples', color: 'bg-tomato', glow: 'shadow-[0_0_20px_#B3311F]' }, // Origin
                  { top: '40%', left: '25%', name: 'New York', color: 'bg-oven', glow: 'shadow-[0_0_20px_#D96A1D]' },
                  { top: '45%', left: '15%', name: 'Chicago', color: 'bg-cheese', glow: 'shadow-[0_0_20px_#F2C14E]' },
                  { top: '60%', left: '75%', name: 'Tokyo', color: 'bg-crust', glow: 'shadow-[0_0_20px_#F7E7CE]' },
                  { top: '65%', left: '85%', name: 'Sydney', color: 'bg-oven', glow: 'shadow-[0_0_20px_#D96A1D]' },
                  { top: '55%', left: '45%', name: 'São Paulo', color: 'bg-tomato', glow: 'shadow-[0_0_20px_#B3311F]' },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    className="absolute group"
                    style={{ top: node.top, left: node.left }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.2, type: 'spring' }}
                  >
                    <div className={`w-4 h-4 rounded-full ${node.color} ${node.glow} relative z-10 animate-pulse`} />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-serif pointer-events-none">
                      {node.name}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
