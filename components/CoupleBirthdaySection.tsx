import { motion } from "framer-motion";

export default function CoupleBirthdaySection() {
  const birthdays = [
    {
      role: "Her Birthday",
      name: "Moh",
      date: "23 December 2002",
      emoji: "🌸",
      gradient: "from-pink-400/30 to-rose-500/10",
      border: "border-pink-300/30",
    },
    {
      role: "His Birthday",
      name: "Win",
      date: "17 October 2001",
      emoji: "🤍",
      gradient: "from-emerald-400/30 to-green-500/10",
      border: "border-emerald-300/30",
    },
  ];

  return (
    <section id="birthday" className="relative overflow-hidden py-24 bg-[#f7f8f3]">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-300/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-sm text-[#5a6b4d]/60 mb-4">
            Special Days
          </p>

          <h2 className="text-4xl md:text-6xl font-light text-[#2e3a27] leading-tight">
            The Days
            <span className="block italic text-pink-500 mt-2">
              Our Hearts Were Born 💖
            </span>
          </h2>

          <p className="mt-6 text-[#2e3a27]/60 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Two beautiful souls born on different days, yet somehow destined
            to meet and create one unforgettable love story.
          </p>
        </motion.div>

        {/* Birthday Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {birthdays.map((person, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              key={index}
              className={`group relative overflow-hidden rounded-[32px] border ${person.border} bg-white/50 backdrop-blur-xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 min-h-[340px] md:min-h-[380px]`}
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${person.gradient} opacity-70`}
              />

              {/* Floating Blur */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/30 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="uppercase tracking-[0.3em] text-xs text-[#2e3a27]/50 mb-2">
                      {person.role}
                    </p>

                    <h3 className="text-3xl md:text-4xl font-light text-[#2e3a27]">
                      {person.name}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-4xl md:text-5xl"
                  >
                    {person.emoji}
                  </motion.div>
                </div>

                {/* Date Box */}
                <div className="rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 p-6">
                  <p className="text-sm text-[#2e3a27]/50 uppercase tracking-[0.25em] mb-3">
                    Birthday Date
                  </p>

                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-light text-[#2e3a27] leading-snug"
                  >
                    {person.date}
                  </motion.h4>
                </div>

                {/* Romantic Text */}
                <p className="mt-8 text-[#2e3a27]/60 italic leading-relaxed text-sm md:text-base">
                  “A day the universe quietly prepared someone special for the
                  other’s heart.”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
