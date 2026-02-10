import { motion } from 'framer-motion'
import { Shield, Clock } from 'lucide-react'

export default function Hero({ onOrder }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 bg-charcoal">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gold text-sm uppercase tracking-[0.2em] mb-4"
        >
          Умный кулон безопасности
        </motion.p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight mb-4 font-display tracking-tight">
          Klever — твоя безопасность всегда с тобой
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#a3a3a3] mb-10 max-w-xl mx-auto"
        >
          Умный аксессуар, который мгновенно позовёт на помощь. Стиль снаружи, защита внутри.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-12 rounded-full bg-gradient-to-b from-zinc-700/60 to-zinc-800/40 border border-gold/30 shadow-[0_0_80px_rgba(201,169,98,0.15)] flex items-center justify-center"
        >
          <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-b from-zinc-600/50 to-zinc-700/30 border border-white/10" />
        </motion.div>

        <motion.button
          onClick={onOrder}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 rounded-full border border-gold text-gold font-medium text-lg hover:bg-gold hover:text-charcoal transition-all duration-300 ease-out"
        >
          Оформить предзаказ
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-[#737373]"
        >
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-gold" strokeWidth={1.5} />
            Гарантия 1 год
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold" strokeWidth={1.5} />
            Доставка по всей России
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
