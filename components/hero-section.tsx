"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const hero1 = "/image/hero1.JPG"
const hero2 = "/image/hero2.JPG"

const ANNIVERSARY_DATE = new Date(2023, 10, 14) // November 14, 2023

function calculateTimeDifference(startDate: Date, endDate: Date) {
  let years = endDate.getFullYear() - startDate.getFullYear()
  let months = endDate.getMonth() - startDate.getMonth()
  let days = endDate.getDate() - startDate.getDate()

  if (days < 0) {
    months--
    const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0)
    days += prevMonth.getDate()
  }

  if (months < 0) {
    years--
    months += 12
  }

  const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

  return { years, months, days, totalDays }
}

export function HeroSection() {
  const [timePassed, setTimePassed] = useState({ years: 0, months: 0, days: 0, totalDays: 0 })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const diff = calculateTimeDifference(ANNIVERSARY_DATE, now)
      setTimePassed(diff)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000 * 60)

    return () => clearInterval(interval)
  }, [])

  const progressYears = Math.min(timePassed.years + timePassed.months / 12, 10)
  const progressPercent = (progressYears / 10) * 100

  return (
    <section id="hero" ref={ref} className="min-h-[80vh] bg-[#f8f9f5] px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text & Counter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            {/* Myanmar Text */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#5a6b4d] leading-tight"
              >
                ချစ်ရသော
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#5a6b4d] leading-tight"
              >
                အမျိုးသမီးလေးနဲ့
              </motion.h1>
            </div>

            {/* Anniversary Counter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7e0]"
            >
              <p className="text-black/60 text-sm tracking-widest uppercase mb-4">Been Together</p>

              <div className="flex items-baseline gap-1 flex-wrap">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                  className="text-4xl md:text-5xl font-bold text-[#22c55e]"
                >
                  {timePassed.years}
                </motion.span>
                <span className="text-lg md:text-xl text-black font-medium mr-3">Year</span>
                
                <motion.span
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1, type: "spring" }}
                  className="text-4xl md:text-5xl font-bold text-[#22c55e]"
                >
                  {timePassed.months}
                </motion.span>
                <span className="text-lg md:text-xl text-black font-medium mr-3">Month</span>
                
                <motion.span
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                  className="text-4xl md:text-5xl font-bold text-[#22c55e]"
                >
                  {timePassed.days}
                </motion.span>
                <span className="text-lg md:text-xl text-black font-medium">Day</span>
              </div>

              <p className="text-black/60 text-sm tracking-wide mt-3">has come</p>

              <div className="w-full max-w-xs mt-6">
                <div className="flex justify-between items-center mb-2 text-xs text-black/50">
                  <span>{timePassed.years}y</span>
                  <span>D-{timePassed.totalDays}</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${progressPercent}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 1.4, ease: "easeOut" }}
                    className="h-full bg-[#22c55e] rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Stats */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.6, delay: 1.6 }}
  className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-6"
>
  {[
    { number: "∞", label: "Reasons I Love You" },
    { number: "24/7", label: "Thinking About You" },
    { number: "1", label: "Forever Person" },
    { number: "♡", label: "My Whole Heart" },
  ].map((stat, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
      className="text-center"
    >
      <p className="text-2xl md:text-3xl font-semibold text-[#5a6b4d]">
        {stat.number}
      </p>
      <p className="text-xs md:text-sm text-black/60 tracking-wide">
        {stat.label}
      </p>
    </motion.div>
  ))}
</motion.div>
          </motion.div>

          {/* Right Side - Photos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-1 flex gap-4 sm:px-6
            \
             md:p-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={hero1}
                  alt="Couple photo 1"
                  fill
                  className="object-cover object-[50%_15%]"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-4 mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-48 h-52 md:w-56 md:h-60 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={hero2}
                  alt="Couple photo 2"
                  fill
                  className="object-cover object-[50%_35%]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
