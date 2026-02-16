import { motion } from 'framer-motion'
import { CircleDot, Send, Bell } from 'lucide-react'

const steps = [
  {
    icon: CircleDot,
    num: '01',
    title: 'Нажми на кулон',
    desc: 'Незаметное нажатие — окружающие не поймут, что вы вызываете помощь. Выглядит как поправка украшения.',
  },
  {
    icon: Send,
    num: '02',
    title: 'Сигнал SOS',
    desc: 'Мгновенная отправка через Bluetooth на ваш смартфон. Работает даже в кармане или сумке.',
  },
  {
    icon: Bell,
    num: '03',
    title: 'Близкие знают',
    desc: 'Выбранные контакты получают уведомление в Telegram с геолокацией. Они знают, где вы и что нужна помощь.',
  },
]

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
          className="text-text-muted text-center max-w-lg mx-auto mb-14 text-[14px] leading-[1.65] sm:text-sm sm:leading-[1.7]"
        >
          Три шага — и близкие знают, что нужна помощь
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

        <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-stretch">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden flex-1 flex flex-col p-8 sm:p-10 rounded-3xl border border-border/80 bg-gradient-to-br from-surface via-surface to-accent/5 shadow-lg shadow-black/5 dark:shadow-black/40 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-xl"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-accent/10 via-transparent to-accent-muted/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative flex-1 flex flex-col">
                <span className="text-[13px] sm:text-xs text-accent/80 tracking-widest mb-5 block font-medium">
                  {step.num}
                </span>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] sm:text-lg lg:text-xl font-medium text-text mb-3 font-display leading-[1.35]">
                  {step.title}
                </h3>
                <p className="text-[14px] sm:text-base leading-[1.65] sm:leading-[1.7] text-text-muted flex-grow">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
