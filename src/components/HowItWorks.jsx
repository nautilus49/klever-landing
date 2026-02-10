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
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-center text-cream mb-4 font-display"
        >
          Как это работает
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[#a3a3a3] text-center max-w-lg mx-auto mb-14"
        >
          Три простых шага — и ваши близкие всегда в курсе
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-stretch">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-1 flex flex-col p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:border-gold/20 transition-all duration-300"
            >
              <span className="text-xs text-gold/70 tracking-widest mb-4">{step.num}</span>
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-cream mb-3 font-display">{step.title}</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
