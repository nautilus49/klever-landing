import { motion } from 'framer-motion'
import { Moon, GraduationCap, PhoneOff } from 'lucide-react'

const problems = [
  { icon: Moon, text: 'Поздно возвращаетесь домой?' },
  { icon: GraduationCap, text: 'Волнуетесь за ребёнка в школе?' },
  { icon: PhoneOff, text: 'Нет времени достать телефон?' },
]

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[24px] leading-[1.3] sm:text-2xl sm:leading-[1.35] lg:text-3xl lg:leading-[1.3] font-semibold text-center text-text mb-10 font-display"
        >
          Знакомая ситуация?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/90 p-7 sm:p-8 shadow-sm shadow-black/5 dark:shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/8 via-transparent to-accent-muted/10" />
              <div className="relative">
                <item.icon className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
                <p className="text-[15px] sm:text-base leading-[1.6] sm:leading-[1.65] text-text-muted">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
