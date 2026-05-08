"use client"

import { useState, useEffect } from "react"

const ANNIVERSARY_DATE = new Date(2023, 11, 14) // December 14, 2023

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

export function AnniversaryCounter() {
  const [timePassed, setTimePassed] = useState({ years: 0, months: 0, days: 0, totalDays: 0 })

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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center space-y-6">
        <p className="text-black/60 text-lg tracking-wide">Been Together</p>

        <div className="flex items-baseline justify-center gap-1 flex-wrap">
          <span className="text-5xl md:text-6xl font-bold text-[#22c55e]">{timePassed.years}</span>
          <span className="text-2xl md:text-3xl text-black font-medium">Year</span>
          
          <span className="text-5xl md:text-6xl font-bold text-[#22c55e] ml-3">{timePassed.months}</span>
          <span className="text-2xl md:text-3xl text-black font-medium">Month</span>
          
          <span className="text-5xl md:text-6xl font-bold text-[#22c55e] ml-3">{timePassed.days}</span>
          <span className="text-2xl md:text-3xl text-black font-medium">Day</span>
        </div>

        <p className="text-black/60 text-lg tracking-wide">has come</p>

        <div className="w-full max-w-xs mx-auto mt-10">
          <div className="flex justify-between items-center mb-2 text-sm text-black/50">
            <span>{timePassed.years}y</span>
            <span>D-{timePassed.totalDays}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#22c55e] rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <p className="text-black/40 text-sm mt-6">Since December 14, 2023</p>
      </div>
    </div>
  )
}
