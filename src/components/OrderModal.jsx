import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function OrderModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, contact })
    setIsSuccess(true)
    setTimeout(() => {
      onClose()
      setName('')
      setContact('')
      setIsSuccess(false)
    }, 2000)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl backdrop-blur-xl bg-charcoal/95 border border-gold/20 p-6 sm:p-8 shadow-2xl"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <p className="text-xl font-semibold text-gold mb-2 font-display">Спасибо!</p>
                <p className="text-[#a3a3a3]">Мы напишем вам первым</p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-semibold text-cream mb-2 font-display">
                  Упс! Первая партия распродана
                </h3>
                <p className="text-[#a3a3a3] mb-6 leading-relaxed">
                  Спрос оказался выше, чем мы ожидали. Оставьте контакты, чтобы попасть в список
                  ожидания и получить приоритет на следующую партию.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream placeholder-[#a3a3a3]/60 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Телефон или Telegram"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream placeholder-[#a3a3a3]/60 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gold text-charcoal font-medium hover:bg-gold-muted transition-colors duration-300"
                  >
                    Встать в очередь
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
