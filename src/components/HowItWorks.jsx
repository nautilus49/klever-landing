import { motion } from 'framer-motion'
import { CircleDot, Send, Bell, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: CircleDot,
    num: '01',
    title: 'Нажмите на кулон',
    desc: 'Нажатие похоже на то, как поправляют цепочку. Со стороны не понять, что вы вызываете помощь.',
  },
  {
    icon: Send,
    num: '02',
    title: 'Кулон по Bluetooth отправляет сигнал на телефон',
    desc: 'Телефон может лежать в сумке или кармане.',
  },
  {
    icon: Bell,
    num: '03',
    title: 'Телефон присылает в Telegram вашим контактам',
    desc: 'Сообщение с вашей геолокацией.',
  },
]

const stepVariants = {
  hidden: { opacity: 0, x: -24, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const connectorVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.5 + 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[24px] leading-[1.3] sm:text-2xl sm:leading-[1.35] lg:text-3xl lg:leading-[1.3] font-semibold text-center text-text mb-4 font-display"
        >
          Как это работает
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-text-muted text-center max-w-lg mx-auto mb-4 text-[14px] sm:text-sm sm:leading-[1.7]"
        >
          Просто нажмите — и родные уже в курсе
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-2xl mx-auto mb-16 rounded-3xl overflow-hidden border border-border/80 aspect-[5/3] shadow-lg shadow-black/5 dark:shadow-black/40"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/clicking-on-klever.png`}
            alt="Нажатие на кулон Клевер"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative md:flex md:items-stretch">
          {/* Vertical timeline line (mobile) */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-accent/30 via-accent/20 to-transparent md:hidden" aria-hidden />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex flex-col md:flex-row md:flex-1 gap-6 md:gap-0"
          >
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col md:flex-1 md:flex-row md:items-stretch md:min-w-0 pl-14 md:pl-0">
                {/* Step dot (mobile) */}
                <div
                  className="absolute left-4 top-8 w-4 h-4 rounded-full border-2 border-accent/50 bg-surface md:hidden"
                  aria-hidden
                />
                <motion.div
                  custom={i}
                  variants={stepVariants}
                  className="group relative overflow-hidden flex flex-col p-6 sm:p-8 rounded-2xl border border-border/80 bg-gradient-to-br from-surface via-surface to-accent/5 shadow-lg shadow-black/5 dark:shadow-black/40 transition-all duration-300 hover:border-accent/40 hover:shadow-xl flex-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 shrink-0">
                      <step.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs text-accent/80 tracking-widest font-medium">{step.num}</span>
                  </div>
                <h3 className="text-lg sm:text-xl font-medium text-text mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-text-muted">
                  {step.desc}
                </p>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div
                  custom={i}
                  variants={connectorVariants}
                  className="hidden md:flex items-center justify-center flex-shrink-0 px-2 lg:px-4"
                >
                  <ArrowRight className="w-6 h-6 text-accent/50" strokeWidth={2} />
                </motion.div>
              )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
