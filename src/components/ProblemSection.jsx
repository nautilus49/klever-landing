import { motion } from 'framer-motion'
import { Moon, GraduationCap, PhoneOff } from 'lucide-react'

const problems = [
  {
    icon: Moon,
    text: 'Поздно возвращаетесь домой?',
  },
  {
    icon: GraduationCap,
    text: 'Волнуетесь за ребёнка в школе?',
  },
  {
    icon: PhoneOff,
    text: 'Нет времени достать телефон?',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-center text-cream mb-12 font-display"
        >
          Узнаёте себя?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:border-gold/20 transition-all duration-300"
            >
              <item.icon className="w-11 h-11 text-gold mb-5" strokeWidth={1.5} />
              <p className="text-lg text-[#a3a3a3]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
