import { motion } from 'framer-motion'

export default function Navbar({ onOrder }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-bg/90 backdrop-blur-xl border-b border-border"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-medium text-text tracking-widest font-display">Клевер</span>
        <img
          src={`${import.meta.env.BASE_URL}images/logo.svg`}
          alt="Клевер"
          className="h-8 w-auto"
        />
      </div>
      <button
        onClick={onOrder}
        className="px-6 py-2.5 rounded-full border border-accent text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300 ease-out"
      >
        Купить
      </button>
    </motion.nav>
  )
}
