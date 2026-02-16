import { motion } from 'framer-motion'
import { Shield, Clock } from 'lucide-react'

const headlineWords = [['Клевер', '—', 'стиль'], ['и', 'безопасность']]

export default function Hero({ onOrder }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-20 bg-bg overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-[-200px] -top-40 h-72 bg-gradient-to-br from-accent/15 via-transparent to-accent-muted/10 blur-3xl animate-[blob-breathe_12s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-[-120px] bottom-[-160px] h-80 bg-gradient-to-tr from-black/5 via-transparent to-accent/10 dark:from-white/5 dark:to-accent/20 blur-3xl animate-[blob-breathe_18s_ease-in-out_infinite]"
        style={{ animationDelay: '-4s' }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-4xl mx-auto"
      >
        <h1 className="mt-5 text-[28px] leading-[1.15] sm:text-4xl sm:leading-[1.2] md:text-5xl md:leading-[1.15] lg:text-[52px] lg:leading-[1.1] font-semibold text-text font-display tracking-tight text-center">
          {headlineWords.map((line, li) => (
            <span key={li} className="block sm:inline">
              {li === 1 && <br className="hidden sm:inline" />}
              {line.map((word, wi) => (
                <motion.span
                  key={`${li}-${wi}`}
                  initial={{ y: '1em', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + li * 0.1 + wi * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block overflow-hidden align-bottom"
                >
                  <span className="block">{word}{wi < line.length - 1 ? '\u00A0' : ''}</span>
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 sm:mt-4 text-[15px] leading-[1.6] sm:text-base sm:leading-[1.65] lg:text-lg lg:leading-[1.7] text-text-muted max-w-xl mx-auto"
        >
          Простой кулон с кнопкой SOS. Одно касание — родные сразу получат сигнал и вашу геолокацию.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, type: 'spring', stiffness: 80, damping: 16 }}
          className="relative w-52 h-52 sm:w-64 sm:h-64 mx-auto mt-10 mb-10"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/45 via-accent-muted/20 to-transparent blur-3xl opacity-80 dark:from-accent/55 dark:via-accent-muted/30" />
          <div className="relative w-full h-full rounded-full border border-border/70 bg-surface/80 shadow-xl shadow-black/5 dark:shadow-black/40 flex items-center justify-center backdrop-blur">
            <img
              src={`${import.meta.env.BASE_URL}images/klever_without_bg.png`}
              alt="Кулон Клевер"
              className="w-[82%] h-[82%] object-contain"
            />
          </div>
        </motion.div>

        <motion.button
          onClick={onOrder}
          whileHover={{ scale: 1.04, boxShadow: '0 18px 40px rgba(0,0,0,0.22)' }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent px-9 py-4 text-base sm:text-lg font-medium text-white shadow-md shadow-accent/35 transition-all duration-300 ease-out hover:bg-accent-muted"
        >
          Купить
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 text-[13px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.22em] text-text-muted/70 leading-relaxed"
        >
          Делаем в России
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[14px] sm:text-sm text-text-muted leading-relaxed"
        >
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent" strokeWidth={1.5} />
            Гарантия 1 год
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" strokeWidth={1.5} />
            Доставка по всей России
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
