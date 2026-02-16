import { motion } from 'framer-motion'
import { Sun, MoonStar } from 'lucide-react'

export default function Navbar({ onOrder, theme, onToggleTheme }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-bg/90 backdrop-blur-xl border-b border-border"
    >
      <span className="text-xl font-medium text-text tracking-widest font-display">Клевер</span>
      <div className="flex items-center gap-3">
        <motion.button
          type="button"
          whileTap={{ scale: 0.9, rotate: -8 }}
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/80 text-text hover:border-accent hover:text-accent transition-colors duration-300"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4" strokeWidth={1.8} />
          ) : (
            <MoonStar className="w-4 h-4" strokeWidth={1.8} />
          )}
        </motion.button>
        <button
          onClick={onOrder}
          className="px-6 py-2.5 rounded-full border border-accent text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300 ease-out"
        >
          Купить
        </button>
      </div>
    </motion.nav>
  )
}
