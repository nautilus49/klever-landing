import { motion } from 'framer-motion'

export default function VisualDivider() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative h-px"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/40 blur-sm" />
        </motion.div>
      </div>
    </section>
  )
}
