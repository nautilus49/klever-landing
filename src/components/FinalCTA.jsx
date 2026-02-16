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
        <h2 className="text-[24px] leading-[1.3] sm:text-2xl sm:leading-[1.35] lg:text-3xl lg:leading-[1.3] font-semibold text-text mb-3 font-display">
          Готовы купить?
        </h2>
        <p className="text-text-muted mb-8 text-[14px] leading-[1.65] sm:text-sm sm:leading-[1.7]">
          Первая партия — ограниченный тираж.
        </p>
        <motion.button
          onClick={onOrder}
          whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.97 }}
          className="px-9 py-4 rounded-full border border-accent bg-accent text-base font-medium text-white shadow-md shadow-accent/35 transition-all duration-300 ease-out hover:bg-accent-muted"
        >
          Купить
        </motion.button>
      </motion.div>
    </section>
  )
}
