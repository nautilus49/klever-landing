import { motion } from 'framer-motion'
import { Moon, GraduationCap, PhoneOff } from 'lucide-react'

const problems = [
  { icon: Moon, text: 'Поздно возвращаетесь домой?' },
  { icon: GraduationCap, text: 'Волнуетесь за ребёнка в школе?' },
  { icon: PhoneOff, text: 'Нет времени достать телефон?' },
]

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[24px] leading-[1.3] sm:text-2xl sm:leading-[1.35] lg:text-3xl lg:leading-[1.3] font-semibold text-center text-text mb-12 font-display"
        >
          Знакомая ситуация?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-surface via-surface to-accent/5 p-8 sm:p-12 lg:p-16 shadow-lg shadow-black/5 dark:shadow-black/40"
        >
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br from-accent/20 via-accent-muted/10 to-transparent blur-3xl opacity-60"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-24 bottom-[-120px] h-64 w-64 rounded-full bg-gradient-to-tr from-black/5 via-transparent to-accent/10 dark:from-white/5 dark:to-accent/15 blur-3xl opacity-60"
            aria-hidden="true"
          />
          
          <div className="relative space-y-8 sm:space-y-10">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 sm:gap-6 group"
              >
                <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" strokeWidth={1.5} />
                </div>
                <p className="text-[16px] sm:text-lg lg:text-xl leading-[1.6] sm:leading-[1.65] text-text pt-1 sm:pt-2">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
