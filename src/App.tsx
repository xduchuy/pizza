import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import History from './components/History'
import GlobalExpansion from './components/GlobalExpansion'
import PizzaStyles from './components/PizzaStyles'
import Brands from './components/Brands'
import Vietnam from './components/Vietnam'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  // Smooth scroll configuration or any global event listeners can go here.
  useEffect(() => {
    // Ensuring window starts at top on reload
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <History />
        <GlobalExpansion />
        <PizzaStyles />
        <Brands />
        <Vietnam />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
