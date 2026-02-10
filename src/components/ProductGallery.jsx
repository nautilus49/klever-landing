import { motion } from 'framer-motion'

const placeholders = [
  { w: 600, h: 600, label: 'Основной ракурс' },
  { w: 600, h: 600, label: 'Деталь кулона' },
]

export default function ProductGallery() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-center text-cream mb-12 font-display"
        >
          Klever в деталях
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {placeholders.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-white/5 bg-zinc-800/30 flex flex-col items-center justify-center gap-1 text-[#737373] text-sm aspect-square max-w-md mx-auto w-full"
            >
              <span className="font-medium">
                {item.w} × {item.h}
              </span>
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
