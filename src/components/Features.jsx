import { motion } from 'framer-motion'
import { Sparkles, Smartphone, Shield, Heart } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Украшение с характером',
    text: 'Минималистичный кулон, который выглядит как премиальное украшение, а не как гаджет.',
  },
  {
    icon: Smartphone,
    title: 'Приложение и Telegram',
    text: 'Сигнал летит к близким через приложение и Telegram. Без подписок и абонентской платы.',
  },
  {
    icon: Shield,
    title: 'Надёжный помощник',
    text: 'Собираем первую партию и сами пользуемся Клевером каждый день.',
  },
  {
    icon: Heart,
    title: 'Подарок с заботой',
    text: 'Это не просто аксессуар, а способ сказать «я рядом, даже если нас разделяют километры».',
  },
]

export default function Features() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-6xl mx-auto">
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
          className="text-text-muted text-center max-w-lg mx-auto mb-14 text-[14px] leading-[1.65] sm:text-sm sm:leading-[1.7]"
        >
          Мы делаем Клевер в России: аккуратная электроника спрятана внутри лаконичного кулона.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/90 px-6 py-7 shadow-sm shadow-black/5 dark:shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/10 via-transparent to-accent-muted/15" />
              <div className="relative">
                <item.icon className="w-9 h-9 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-text font-medium mb-2.5 font-display text-[15px] sm:text-base leading-[1.4]">{item.title}</h3>
                <p className="text-text-muted text-[13px] sm:text-sm leading-[1.65] sm:leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
