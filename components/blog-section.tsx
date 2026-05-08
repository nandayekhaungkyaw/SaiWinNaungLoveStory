"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
const blog1='/image/blog1.JPG'
const blog2='/image/blog2.JPG'
const blog3='/image/blog3.JPG'
const blog4='/image/blog4.JPG'
const blog5='/image/blog5.JPG'
const blog6='/image/blog6.JPG'


const blogPosts = [
  {
    category: "FLORAL DESIGN",
    date: "OCT 24, 2024",
    title: "The Secret Language of Peonies in Winter",
    image: blog1,
    description: "Discover the enchanting symbolism behind winter peonies and how they can transform your special day into a magical celebration.",
  },
  {
    category: "PLANNING TIPS",
    date: "OCT 18, 2024",
    title: "Bagan ရဲ့ နေဝင်ချိန်တွေထက်တောင် မင်းကို ပိုချစ်တယ်။",
    image: blog2,
    description: "Bagan ရဲ့ နေဝင်ချိန်တွေထက်တောင် မင်းကို ပိုချစ်တယ်။",
  },
  {
    category: "FASHION",
    date: "OCT 12, 2024",
    title: "Trends: Minimalist Silhouettes for 2025",
    image: blog3,
    description: "Explore the elegant simplicity of minimalist wedding fashion trends that will dominate the upcoming year.",
  },
  {
    category: "LOCATIONS",
    date: "SEP 28, 2024",
    title: "Top 5 Outdoor Venues in the Valley",
    image: blog4,
    description: "Discover breathtaking outdoor venues that offer stunning natural backdrops for your dream wedding ceremony.",
  },
  {
    category: "CAKES",
    date: "SEP 15, 2024",
    title: "The Art of Edible Petals and Gold Leaf",
    image: blog5,
    description: "Master the art of decorating wedding cakes with edible flowers and luxurious gold leaf accents.",
  },
  {
    category: "CATERING",
    date: "SEP 04, 2024",
    title: "Signature Cocktails for Garden Parties",
    image: blog6,
    description: "Create memorable signature cocktails that perfectly complement your garden party wedding theme.",
  },
]

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null)

  return (
    <section id="blog" ref={ref} className="bg-[#f8f9f5] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <p className="text-xs tracking-widest text-black/50 mb-2">JOURNAL</p>
            <h2 className="text-2xl md:text-3xl font-serif  text-green-700">Blogs - Ancient Bagan City With Her</h2>
          </div>
          
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedBlog(index)}
            >
              <motion.div
                className="relative h-48 mb-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5a6b4d" strokeWidth="2">
                      <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
              <div className="flex items-center gap-4 text-xs text-black/50 mb-2">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="font-medium text-black group-hover:text-[#5a6b4d] transition-colors">
                {post.title}
              </h3>
              <motion.span
                whileHover={{ x: 5 }}
                className="text-xs text-black/60 hover:text-[#5a6b4d] mt-3 inline-block transition-colors"
              >
                READ BLOG →
              </motion.span>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Wide View Modal for Blog */}
      <AnimatePresence>
        {selectedBlog !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              {/* Wide Image */}
              <div className="relative w-full h-[50vh] md:h-[60vh]">
                <Image
                  src={blogPosts[selectedBlog].image}
                  alt={blogPosts[selectedBlog].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 text-xs mb-3 opacity-80">
                    <span className="bg-[#22c55e] px-3 py-1 rounded-full">{blogPosts[selectedBlog].category}</span>
                    <span>{blogPosts[selectedBlog].date}</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-serif mb-4">{blogPosts[selectedBlog].title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-black/70 text-lg leading-relaxed mb-6">
                  {blogPosts[selectedBlog].description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#5a6b4d] hover:bg-[#4a5b3d] text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                  Read Full Article
                </motion.button>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center px-8 pb-8">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedBlog(selectedBlog > 0 ? selectedBlog - 1 : blogPosts.length - 1)
                  }}
                  className="flex items-center gap-2 text-black/60 hover:text-[#5a6b4d] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                  Previous
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedBlog(selectedBlog < blogPosts.length - 1 ? selectedBlog + 1 : 0)
                  }}
                  className="flex items-center gap-2 text-black/60 hover:text-[#5a6b4d] transition-colors"
                >
                  Next
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
