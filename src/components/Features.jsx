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
          className="text-text-muted text-center max-w-lg mx-auto mb-16 text-[14px] leading-[1.65] sm:text-sm sm:leading-[1.7]"
        >
          Мы делаем Клевер в России: аккуратная электроника спрятана внутри лаконичного кулона.
        </motion.p>

        <div className="space-y-8 sm:space-y-12">
          {features.map((item, i) => {
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br ${
                  isEven
                    ? 'from-surface via-surface to-accent/5'
                    : 'from-accent/5 via-surface to-surface'
                } p-8 sm:p-12 lg:p-16 shadow-lg shadow-black/5 dark:shadow-black/40`}
              >
                <div
                  className={`pointer-events-none absolute ${
                    isEven ? '-right-32 -top-32' : '-left-32 -bottom-32'
                  } h-64 w-64 rounded-full bg-gradient-to-br from-accent/15 via-accent-muted/8 to-transparent blur-3xl opacity-50`}
                  aria-hidden="true"
                />
                
                <div
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-8 lg:gap-12`}
                >
                  <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-3xl bg-accent/15 flex items-center justify-center">
                    <item.icon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-accent" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-[18px] sm:text-xl lg:text-2xl font-medium text-text mb-3 font-display leading-[1.3]">
                      {item.title}
                    </h3>
                    <p className="text-[15px] sm:text-base lg:text-lg leading-[1.65] sm:leading-[1.7] text-text-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
