import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // A slower trail
  const trailSpringConfig = { damping: 30, stiffness: 100, mass: 1 }
  const trailXSpring = useSpring(cursorX, trailSpringConfig)
  const trailYSpring = useSpring(cursorY, trailSpringConfig)

  useEffect(() => {
    // Hide default cursor over entire body
    document.body.style.cursor = 'none'

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    
    // Check if hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <div className="hidden lg:block">
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-tomato z-[9999] pointer-events-none mix-blend-screen shadow-[0_0_10px_#B3311F]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 3 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.2 } }}
      />
      
      {/* Hollow Outline / Hover State */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-tomato/50 z-[9998] pointer-events-none flex items-center justify-center backdrop-blur-sm"
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderColor: isHovering ? 'rgba(217,106,29,0.8)' : 'rgba(179,49,31,0.3)',
          backgroundColor: isHovering ? 'rgba(179,49,31,0.05)' : 'transparent'
        }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      >
        {isHovering && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-1.5 h-1.5 rounded-full bg-oven"
          />
        )}
      </motion.div>
    </div>
  )
}
