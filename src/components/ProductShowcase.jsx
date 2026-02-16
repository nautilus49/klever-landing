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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-surface border border-border p-8 sm:p-12 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="shrink-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-border bg-white">
                <img
                  src={`${import.meta.env.BASE_URL}images/klever_with_bg.png`}
                  alt="Кулон Клевер"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <p className="text-sm text-accent uppercase tracking-widest mb-3">Предзаказ</p>
              <p className="text-4xl sm:text-5xl font-semibold text-accent mb-6 font-display">
                4 500 ₽
              </p>

              <p className="text-text font-medium mb-4">В комплекте:</p>
              <ul className="space-y-3 mb-8">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-muted">
                    <Check className="w-5 h-5 text-accent shrink-0" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 text-sm text-text-muted">
                {extras.map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    {item.text}
                  </span>
                ))}
              </div>

              <motion.button
                onClick={onOrder}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-accent text-accent font-medium text-lg hover:bg-accent hover:text-white transition-all duration-300 ease-out"
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
