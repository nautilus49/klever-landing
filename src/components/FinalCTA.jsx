import { motion } from 'framer-motion'

export default function FinalCTA({ onOrder }) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-text mb-4 font-display">
          Готовы к спокойствию?
        </h2>
        <p className="text-text-muted mb-8">
          Оформите предзаказ и получите Клевер в числе первых. Ограниченная партия.
        </p>
        <motion.button
          onClick={onOrder}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 rounded-full border border-accent text-accent font-medium text-lg hover:bg-accent hover:text-white transition-all duration-300 ease-out"
        >
          Купить
        </motion.button>
      </motion.div>
    </section>
  )
}
