import { useRef, useEffect, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const stats = [
  { value: 1, fmt: (n) => `${Math.round(n)} год`, label: 'автономной работы' },
  { value: 2, fmt: (n) => `< ${Math.round(n)} сек`, label: 'до отправки сигнала' },
  { value: 24, fmt: (n) => `${Math.round(n)}/7`, label: 'приложение работает' },
]

function CountUp({ to, format }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const ctrl = animate(0, to, { duration: 1.2, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(v) })
    return () => ctrl.stop()
  }, [inView, to])
  return <span ref={ref}>{format(n)}</span>
}

export default function TrustStats() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-semibold text-accent font-display mb-1">
                <CountUp to={stat.value} format={stat.fmt} />
              </p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
