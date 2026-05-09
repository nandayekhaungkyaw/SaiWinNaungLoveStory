"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, LockKeyhole, Sparkles } from "lucide-react";

export default function DownloadPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const correctPassword = "256275";

  const handleUnlock = () => {
    if (password === correctPassword) {
      setLoading(true);

      setTimeout(() => {
        window.open(
          "https://drive.google.com/drive/folders/1z-Ib47_178VuIfhyl1BPzUxEKIvQm8UP?usp=sharing",
          "_blank",
          "noopener,noreferrer"
        );
      }, 1800);
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2200);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-4 py-10">
      {/* Background */}
      <img
        src="/image/hero1.jpg"
        alt="love"
        className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />

      {/* Romantic Glow */}
      <div className="absolute w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-pink-500/20 blur-3xl rounded-full" />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-16 left-5 md:left-20 text-pink-300/50"
      >
        <Heart size={30} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-24 right-6 md:right-20 text-rose-300/40"
      >
        <Sparkles size={34} />
      </motion.div>

      {/* Romantic Floating GIF */}
      <motion.img
        animate={{ y: [0, -14, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        src="https://media.tenor.com/ebB1PXU9B8EAAAAi/love-heart.gif"
        alt="love"
        className="absolute top-10 right-4 md:right-16 w-16 md:w-24 opacity-70 pointer-events-none"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[340px] md:max-w-md rounded-[28px] md:rounded-[36px] border border-white/10 bg-white/10 backdrop-blur-2xl px-5 py-7 md:p-9 text-white shadow-[0_10px_60px_rgba(0,0,0,0.45)]"
      >
        {/* Icon */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-5"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
            <Heart
              className="text-pink-300"
              size={24}
              fill="currentColor"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-light text-center tracking-wide">
          Private Memories File
        </h1>

        <p className="text-center text-white/60 text-xs md:text-sm mt-3 leading-relaxed px-2">
          Enter the secret password
          <br />
          to download our beautiful love moments ✨
        </p>

        {/* Input */}
        <div className="mt-7 relative">
          <input
            type="password"
            placeholder="Secret password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            className={`w-full rounded-2xl bg-white/10 border px-4 md:px-5 py-3 md:py-4 pr-12 outline-none text-sm transition-all duration-300 placeholder:text-white/30
            ${
              error
                ? "border-rose-400/70"
                : "border-white/10 focus:border-pink-300/40"
            }`}
          />

          <LockKeyhole
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
          />
        </div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3"
            >
              <p className="text-pink-300 text-xs md:text-sm text-center">
                Wrong password... our memories are still locked 💔
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          onClick={handleUnlock}
          className="w-full mt-6 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 py-3 md:py-4 text-sm tracking-wide shadow-lg shadow-pink-500/20"
        >
          {loading ? "Opening Memories..." : "Unlock Memories ✨"}
        </motion.button>

        {/* Footer */}
        <p className="text-center text-[11px] md:text-xs text-white/30 mt-5 italic leading-relaxed">
          “Some memories deserve a little protection,
          <br />
          because they are too precious to lose.” 💖
        </p>
      </motion.div>
    </main>
  );
}