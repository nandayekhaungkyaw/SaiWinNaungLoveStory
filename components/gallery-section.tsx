"use client"

import { useRef, useState, useCallback } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"

const gallery1 = "/image/rectangle1.JPG"
const gallery2 = "/image/rectangle2.JPG"
const gallery3 = "/image/stand1.JPG"
const gallery4 = "/image/stand2.JPG"
const gallery5 = "/image/stand3.JPG"
const gallery6 = "/image/stand4.JPG"
const gallery7 = "/image/stand5.JPG"

const galleryImages = [
  { src: gallery1, alt: "Couple at park", position: "object-[50%_40%]" },
  { src: gallery2, alt: "Temple visit", position: "object-[50%_45%]" },
  { src: gallery3, alt: "Matching outfits", position: "object-[50%_50%]" },
  { src: gallery4, alt: "Garden moment", position: "object-[50%_55%]" },
  { src: gallery5, alt: "Romantic walk", position: "object-[50%_60%]" },
  { src: gallery6, alt: "Sunset embrace", position: "object-[50%_65%]" },
  { src: gallery7, alt: "City lights", position: "object-[50%_70%]" },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrev = useCallback(() => {
    setSelectedImage(prev => {
      if (prev === null) return null
      return prev > 0 ? prev - 1 : galleryImages.length - 1
    })
  }, [])

  const handleNext = useCallback(() => {
    setSelectedImage(prev => {
      if (prev === null) return null
      return prev < galleryImages.length - 1 ? prev + 1 : 0
    })
  }, [])

  const handleClose = useCallback(() => {
    setSelectedImage(null)
  }, [])

  return (
    <section id="gallery" ref={ref} className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-[#5a6b4d]">
            <path d="M0 10 Q15 0 30 10 Q45 20 60 10" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="15" cy="6" r="2" fill="currentColor"/>
            <circle cx="30" cy="10" r="2" fill="currentColor"/>
            <circle cx="45" cy="14" r="2" fill="currentColor"/>
          </svg>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl md:text-4xl font-serif text-center text-black mb-16"
        >
         Mandalay Couple's Gallery
        </motion.h2>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {[0, 3, 6].map((idx) => (
              galleryImages[idx] && (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                    idx === 0 ? 'h-64' : idx === 3 ? 'h-80' : 'h-72'
                  }`}
                >
                  <Image
                    src={galleryImages[idx].src}
                    alt={galleryImages[idx].alt}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-110 ${galleryImages[idx].position}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5a6b4d" strokeWidth="2">
                        <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 mt-8">
            {[1, 4].map((idx) => (
              galleryImages[idx] && (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                    idx === 1 ? 'h-80' : 'h-72'
                  }`}
                >
                  <Image
                    src={galleryImages[idx].src}
                    alt={galleryImages[idx].alt}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-110 ${galleryImages[idx].position}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5a6b4d" strokeWidth="2">
                        <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex-col gap-4 hidden md:flex">
            {[2, 5].map((idx) => (
              galleryImages[idx] && (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                    idx === 2 ? 'h-64' : 'h-80'
                  }`}
                >
                  <Image
                    src={galleryImages[idx].src}
                    alt={galleryImages[idx].alt}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-110 ${galleryImages[idx].position}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5a6b4d" strokeWidth="2">
                        <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            {/* Background Click to Close */}
            <div className="absolute inset-0" onClick={handleClose} />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden z-10"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors z-20"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
              
              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#22c55e] hover:bg-[#16a34a] flex items-center justify-center transition-colors z-20 shadow-lg"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              
              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#22c55e] hover:bg-[#16a34a] flex items-center justify-center transition-colors z-20 shadow-lg"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full z-20">
                <span className="text-white text-sm">
                  {selectedImage + 1} / {galleryImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
