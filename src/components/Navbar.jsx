import { motion } from 'framer-motion'

export default function Navbar({ onOrder }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-charcoal/80 backdrop-blur-xl border-b border-white/5"
    >
      <span className="text-xl font-medium text-cream tracking-widest font-display">
        Klever
      </span>
      <button
        onClick={onOrder}
        className="px-6 py-2.5 rounded-full border border-gold text-gold font-medium hover:bg-gold hover:text-charcoal transition-all duration-300 ease-out"
      >
        Заказать
      </button>
    </motion.nav>
  )
}
