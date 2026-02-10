import { motion } from 'framer-motion'

export default function LifestyleSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto"
      >
        <div
          className="w-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-800/30 flex flex-col items-center justify-center gap-1 text-[#737373] text-sm"
          style={{ aspectRatio: '1200/800', minHeight: 280 }}
        >
          <span className="font-medium">1200 × 800</span>
          <span className="text-xs">Девушка с кулоном (lifestyle)</span>
        </div>
      </motion.div>
    </section>
  )
}
