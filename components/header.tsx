"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Date", section: "hero" },
  { name: "Gallery", section: "gallery" },
  { name: "Catering", section: "carousel" },
  { name: "Blog", section: "blog" },
]

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#f8f9f5] px-6 md:px-12 lg:px-20 py-4 sticky top-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <span className="text-xl md:text-2xl   font-bold font-mono    text-[#5a6b4d] tracking-wide">Moh & Win</span>
          <span className="text-[#5a6b4d]">✿</span>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.section)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -2, color: "#5a6b4d" }}
              className={`text-sm text-black/70 hover:text-[#5a6b4d] transition-colors duration-300 ${
                index === 0 ? "border-b-2 border-[#5a6b4d] pb-1" : ""
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        {/* CTA Button */}
      
      </div>
    </motion.header>
  )
}
