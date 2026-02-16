import { motion } from 'framer-motion'
import { Sparkles, Smartphone, Shield, Heart } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.08 },
  },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

const features = [
  {
    icon: Sparkles,
    title: 'Просто красивое украшение',
    text: 'Стильно выглядит. Сложно догадаться, что это не просто кулон.',
  },
  {
    icon: Smartphone,
    title: 'Приложение и Telegram',
    text: 'Сигнал к близким за секунды. Без подписок.',
  },
  {
    icon: Shield,
    title: 'Надёжный помощник',
    text: 'Делаем в России. Сами пользуемся каждый день.',
  },
  {
    icon: Heart,
    title: 'Подарок, который говорит о заботе',
    text: 'Как сказать «я рядом», когда вы далеко.',
  },
]

export default function Features() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[24px] leading-[1.3] sm:text-2xl sm:leading-[1.35] lg:text-3xl lg:leading-[1.3] font-semibold text-center text-text mb-3 font-display"
        >
          Украшение и технология в одном
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-text-muted text-center max-w-lg mx-auto mb-14 text-[14px] sm:text-sm sm:leading-[1.7]"
        >
          С виду обычное украшение. Внутри — всё, что нужно для SOS.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={item}
              whileTap={{ scale: 0.99 }}
              className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface/80 p-6 sm:p-8 shadow-lg shadow-black/5 dark:shadow-black/40 flex gap-5 items-start"
            >
              <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent/15 flex items-center justify-center">
                <feat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[17px] sm:text-lg font-medium text-text mb-2 font-display">
                  {feat.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-text-muted">
                  {feat.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
