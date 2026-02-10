import { motion } from 'framer-motion'

const stats = [
  { value: '1 год', label: 'автономной работы' },
  { value: '< 2 сек', label: 'до отправки сигнала' },
  { value: '24/7', label: 'работа приложения' },
]

export default function TrustStats() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-semibold text-accent font-display mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
