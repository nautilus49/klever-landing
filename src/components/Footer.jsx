import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-surface"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="text-sm text-text-muted font-display tracking-widest">Клевер</span>
          <span className="text-text-muted text-sm">© 2026</span>
        </div>
        <div className="flex gap-8">
          <a
            href="#"
            className="text-text-muted hover:text-accent text-sm transition-colors duration-300"
          >
            Политика конфиденциальности
          </a>
          <a
            href="#"
            className="text-text-muted hover:text-accent text-sm transition-colors duration-300"
          >
            Оферта
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
