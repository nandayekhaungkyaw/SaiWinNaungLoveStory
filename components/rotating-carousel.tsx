"use client"

import { useRef, useState, useCallback } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"

const image1='/image/rotate1.JPG'
const image2='/image/rotate2.JPG'
const image3='/image/rotate3.JPG'
const image4='/image/rotate4.JPG'
const image5='/image/rotate6.JPG'

const carouselImages = [
  { src: image1, alt: "Romantic moment 1" },
  { src: image5, alt: "Romantic moment 2" },
  { src: image3, alt: "Romantic moment 3" },
  { src: image4, alt: "Romantic moment 4" },
  { src: image2, alt: "Romantic moment 5" },
]

interface FloatingHeart {
  id: number
  x: number
  y: number
  size: number
  rotation: number
}

export function RotatingCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([])

  const handleHeartClick = useCallback(() => {
    const newHearts: FloatingHeart[] = []
    for (let i = 0; i < 12; i++) {
      newHearts.push({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 200,
        y: -Math.random() * 150 - 50,
        size: Math.random() * 20 + 15,
        rotation: (Math.random() - 0.5) * 60,
      })
    }
    setFloatingHearts(prev => [...prev, ...newHearts])
    
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)))
    }, 2000)
  }, [])

  return (
    <section id="carousel" ref={ref} className="relative bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full"
        >
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-[#22c55e]/5 rounded-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full"
        >
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-[#22c55e]/10 rounded-full" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#22c55e]" />
            <span className="text-[#22c55e] text-sm tracking-[0.3em] uppercase font-light">Our Moments</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#22c55e]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            Forever <span className="text-[#22c55e]">Together</span>
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Every moment with you is a treasure worth keeping
          </p>
        </motion.div>

        {/* Arc Container */}
        <div className="relative flex justify-center items-end min-h-[400px] md:min-h-[500px]">
          {/* Glowing Arc */}
          <motion.svg
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-0 w-full max-w-[700px] h-[350px]"
            viewBox="0 0 700 350"
            fill="none"
            preserveAspectRatio="xMidYMax meet"
          >
            <motion.path
              d="M 50 350 Q 50 50 350 50 Q 650 50 650 350"
              stroke="url(#arcGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              filter="url(#glow)"
            />
            <motion.path
              d="M 50 350 Q 50 50 350 50 Q 650 50 650 350"
              stroke="#22c55e"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#22c55e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </motion.svg>

          {/* Rotating Container */}
          <motion.div
            className="absolute bottom-0 w-full max-w-[700px] h-[350px]"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            {carouselImages.map((image, index) => {
              const totalImages = carouselImages.length
              const angleSpread = 140
              const startAngle = 90 + angleSpread / 2
              const angleStep = angleSpread / (totalImages - 1)
              const angle = startAngle - (index * angleStep)
              const radius = 280
              const centerX = 350
              const centerY = 350
              const x = centerX + radius * Math.cos((angle * Math.PI) / 180)
              const y = centerY - radius * Math.sin((angle * Math.PI) / 180)

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${(x / 700) * 100}%`,
                    top: `${(y / 350) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: hoveredIndex === index ? 1.2 : 1,
                  } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className="relative cursor-pointer"
                    whileHover={{ scale: 1.15 }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      y: { duration: 3, repeat: Infinity, delay: index * 0.4, ease: "easeInOut" }
                    }}
                  >
                    <div className={`absolute -inset-2 rounded-full bg-[#22c55e]/20 blur-md transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
                    
                    <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-[#22c55e]/60 shadow-xl shadow-[#22c55e]/20">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    
                    <motion.div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#22c55e] rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Center Heart Icon with Click Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            {/* Floating Hearts */}
            <AnimatePresence>
              {floatingHearts.map((heart) => (
                <motion.div
                  key={heart.id}
                  initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                  animate={{ 
                    opacity: [1, 1, 0], 
                    x: heart.x, 
                    y: heart.y, 
                    scale: [0, 1.2, 1],
                    rotate: heart.rotation
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <svg 
                    width={heart.size} 
                    height={heart.size} 
                    viewBox="0 0 24 24" 
                    fill="#22c55e"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.button
              onClick={handleHeartClick}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative cursor-pointer focus:outline-none"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center shadow-lg shadow-[#22c55e]/30 hover:shadow-[#22c55e]/50 transition-shadow">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              {/* Pulse rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#22c55e]"
                animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#22c55e]"
                animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.button>
            
            {/* Click hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 3 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs whitespace-nowrap"
            >
              Click to spread love
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/30 text-sm tracking-widest uppercase">Since November 14, 2023</p>
        </motion.div>
      </div>
    </section>
  )
}
