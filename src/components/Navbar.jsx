import { motion } from 'framer-motion'

export default function Navbar({ onOrder }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-bg/90 backdrop-blur-xl border-b border-border"
    >
      <span className="text-xl font-medium text-text tracking-widest font-display">
        Клевер
      </span>
      <button
        onClick={onOrder}
        className="px-6 py-2.5 rounded-full border border-accent text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300 ease-out"
      >
        Заказать
      </button>
    </motion.nav>
  )
}
