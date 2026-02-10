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
          className="text-2xl sm:text-3xl font-semibold text-center text-text mb-4 font-display"
        >
          Как это работает
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-text-muted text-center max-w-lg mx-auto mb-10"
        >
          Три простых шага — и ваши близкие всегда в курсе
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

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-stretch">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-1 flex flex-col p-8 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 shadow-sm"
            >
              <span className="text-xs text-accent/80 tracking-widest mb-4">{step.num}</span>
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-text mb-3 font-display">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
