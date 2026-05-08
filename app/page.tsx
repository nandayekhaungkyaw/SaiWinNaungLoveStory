"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { GallerySection } from "@/components/gallery-section";
import { RotatingCarousel } from "@/components/rotating-carousel";
import { BlogSection } from "@/components/blog-section";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function HomePage() {
  const [count, setCount] = useState(3);
  const [showLoader, setShowLoader] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const images = [
    "/image/hero1.jpg",
    "/image/hero2.jpg",
    "/image/stand1.jpg",
    "/image/stand2.jpg",
    "/image/rotate1.jpg",
  ];

  // ✅ PRELOAD IMAGES
  useEffect(() => {
    let loaded = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        loaded++;
        if (loaded === images.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // ✅ STABLE COUNTDOWN (NO STACKING)
  useEffect(() => {
    if (!imagesLoaded) return;
    if (count <= 0) return;

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, imagesLoaded]);

  // ✅ CLOSE LOADER AFTER COUNT FINISH
  useEffect(() => {
    if (!imagesLoaded) return;
    if (count !== 0) return;

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [count, imagesLoaded]);

  // 🎵 MUSIC CONTROL
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }

    setMusicOn(!musicOn);
  };

  return (
    <>
      {/* 🎵 MUSIC */}
      <audio ref={audioRef} loop>
        <source src="/music/love-song.mp3" type="audio/mp3" />
      </audio>

      {/* 🎧 MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 bg-white/20 backdrop-blur-md text-white p-3 rounded-full shadow-lg"
      >
        {musicOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      {/* 💖 LOADER */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
          >
            {/* Background */}
            <img
              src="/images/couple.jpg"
              className="absolute inset-0 w-full h-full object-cover blur-sm opacity-40"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <motion.div className="relative text-center text-white">
              <p className="text-sm tracking-[0.3em] uppercase text-white/70 mb-4">
                Our Love Story
              </p>

              <motion.h1
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-7xl md:text-9xl font-light transition-all duration-300"
              >
                {imagesLoaded ? count : "❤"}
              </motion.h1>

              <p className="mt-6 italic text-white/80">
                “Waiting for our memories to load… 💫”
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌸 MAIN WEBSITE */}
      {!showLoader && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-[#f8f9f5]"
        >
          <Header />
          <HeroSection />
          <GallerySection />
          <RotatingCarousel />
          <BlogSection />
        </motion.main>
      )}
    </>
  );
}