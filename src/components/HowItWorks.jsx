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
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-bg">
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
          className="text-text-muted text-center max-w-lg mx-auto mb-10 text-[14px] leading-[1.65] sm:text-sm sm:leading-[1.7]"
        >
          Три шага — и близкие знают, что нужна помощь
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-2xl mx-auto mb-12 rounded-2xl overflow-hidden border border-border aspect-[5/3] shadow-sm"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/clicking-on-klever.png`}
            alt="Нажатие на кулон Клевер"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden flex-1 flex flex-col p-7 rounded-2xl border border-border bg-surface/90 shadow-sm shadow-black/5 dark:shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/8 via-transparent to-accent-muted/10" />
              <div className="relative">
                <span className="text-xs text-accent/80 tracking-widest mb-4 block">{step.num}</span>
                <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <step.icon className="w-5.5 h-5.5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] sm:text-base font-medium text-text mb-2.5 font-display leading-[1.4]">{step.title}</h3>
                <p className="text-text-muted text-[13px] sm:text-sm leading-[1.65] sm:leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
