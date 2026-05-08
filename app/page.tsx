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

  // 💡 PRELOAD IMAGES (stable + Vercel safe)
  useEffect(() => {
    let loaded = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = async () => {
        try {
          await img.decode(); // ensures real render ready
        } catch {}

        loaded++;

        if (loaded === images.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // 💡 COUNTDOWN (no stacking)
  useEffect(() => {
    if (!imagesLoaded) return;
    if (count <= 0) return;

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, imagesLoaded]);

  // 💡 CLOSE LOADER
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

      {/* 🎧 MUSIC BUTTON (beautiful UI) */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white shadow-lg"
      >
        {musicOn ? (
          <>
            <Volume2 size={18} /> Playing
          </>
        ) : (
          <>
            <VolumeX size={18} /> Muted
          </>
        )}
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

            {/* Romantic glow */}
            <div className="absolute w-60 h-60 bg-pink-500/20 blur-3xl rounded-full animate-pulse" />

            {/* Content */}
            <motion.div className="relative text-center text-white flex flex-col items-center">
              <p className="text-sm tracking-[0.3em] uppercase text-white/70 mb-6 z-10">
                Our Love Story
              </p>

              {/* heart animation */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-5xl mb-4 z-10"
              >
                ❤️
              </motion.div>

              {/* countdown */}
              <motion.h1
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-7xl md:text-9xl font-light z-10"
              >
                {imagesLoaded ? count : "❤"}
              </motion.h1>

              <p className="mt-6 italic text-white/80 z-10">
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