
"use client";
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import { RotatingCarousel } from "@/components/rotating-carousel"
import { BlogSection } from "@/components/blog-section"


import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [count, setCount] = useState(3);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (count === 0) {
      setTimeout(() => {
        setShowLoader(false);
      }, 800);
    }
  }, [count]);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
          >
            {/* Background Image */}
            <img
              src="/images/couple.jpg"
              alt="love"
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Romantic Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative text-center text-white"
            >
              <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/70">
                Our Love Story
              </p>

              <motion.h1
                key={count}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-7xl md:text-9xl font-light"
              >
                {count}
              </motion.h1>

              <p className="mt-6 text-white/80 italic text-sm md:text-base">
                “Every second with you feels magical ✨”
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website */}
      {!showLoader && (
        <main className="min-h-screen bg-[#f8f9f5]">
          <Header />
          <HeroSection />
          <GallerySection />
          <RotatingCarousel />
          <BlogSection />
        </main>
      )}
    </>
  );
}
