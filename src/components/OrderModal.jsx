import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export default function OrderModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsChecking(true)
      setShowForm(false)
      setIsSuccess(false)
      // Симуляция проверки наличия на сервере
      setTimeout(() => {
        setIsChecking(false)
        setShowForm(true)
      }, 1500)
    }
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, contact })
    setIsSuccess(true)
    setTimeout(() => {
      onClose()
      setName('')
      setContact('')
      setIsSuccess(false)
      setShowForm(false)
    }, 2000)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !isChecking) {
      onClose()
      setShowForm(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-2xl"
          >
            {isChecking ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Loader2 className="w-8 h-8 text-accent animate-spin mx-auto mb-4" />
                <p className="text-text-muted text-sm">Проверяем наличие на складе...</p>
              </motion.div>
            ) : isSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <p className="text-xl font-semibold text-accent mb-2 font-display">Спасибо!</p>
                <p className="text-text-muted">Мы напишем вам первым</p>
              </motion.div>
            ) : showForm ? (
              <>
                <h3 className="text-xl sm:text-2xl font-semibold text-text mb-2 font-display">
                  Упс! Первая партия распродана
                </h3>
                <p className="text-text-muted mb-6 leading-relaxed text-sm">
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
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder-text-muted/60 focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Телефон или Telegram"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder-text-muted/60 focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-muted transition-colors duration-300"
                  >
                    Встать в очередь
                  </button>
                </form>
              </>
            ) : null}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
