import { motion } from 'framer-motion'
import { Check, Truck, Shield, Package } from 'lucide-react'

const includes = [
  'Кулон Клевер с кнопкой SOS',
  'Серебряная цепочка (42 или 45 см)',
  'Бесплатное приложение для iOS и Android',
]

const extras = [
  { icon: Truck, text: 'Доставка по всей России' },
  { icon: Shield, text: 'Гарантия 1 год' },
  { icon: Package, text: 'Стильная упаковка в комплекте' },
]

export default function ProductShowcase({ onOrder }) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface/95 p-8 sm:p-12 shadow-lg shadow-black/5 dark:shadow-black/40"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-accent/30 via-accent-muted/20 to-transparent blur-3xl opacity-70"
            aria-hidden="true"
          />
          <div className="relative flex flex-col lg:flex-row gap-10 items-center">
            <div className="shrink-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-border/80 bg-gradient-to-br from-surface to-accent/5 shadow-xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/klever_with_bg.png`}
                  alt="Кулон Клевер"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[13px] sm:text-xs font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-accent mb-4 leading-tight">
                Первая партия · ограниченный тираж
              </div>
              <p className="text-[36px] leading-[1.1] sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.1] font-semibold text-accent mb-6 font-display">
                4 500 ₽
              </p>

              <p className="text-text font-medium mb-3 text-[14px] sm:text-sm leading-[1.5]">В комплекте:</p>
              <ul className="space-y-2.5 mb-7">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] sm:text-sm leading-[1.6] sm:leading-[1.65] text-text-muted">
                    <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 text-[14px] sm:text-xs leading-relaxed text-text-muted">
                {extras.map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <item.icon className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                    {item.text}
                  </span>
                ))}
              </div>

              <motion.button
                onClick={onOrder}
                whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-9 py-4 rounded-full border border-accent bg-accent text-base font-medium text-white shadow-md shadow-accent/35 transition-all duration-300 ease-out hover:bg-accent-muted"
              >
                Купить
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
