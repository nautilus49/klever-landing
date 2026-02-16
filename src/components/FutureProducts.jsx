import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { KeyRound, Link as LinkIcon, X } from 'lucide-react'

const items = [
  {
    label: 'Брелок',
    desc: 'Для ключей и рюкзака. Подойдёт школьникам и тем, кто не носит украшения на шее.',
    icon: KeyRound,
  },
  {
    label: 'Браслет',
    desc: 'Для тех, кто предпочитает браслеты кулонам.',
    icon: LinkIcon,
  },
]

export default function FutureProducts() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const openModal = (productLabel) => {
    setSelectedProduct(productLabel)
    setIsModalOpen(true)
    setName('')
    setContact('')
    setIsSuccess(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
    setName('')
    setContact('')
    setIsSuccess(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ product: selectedProduct, name, contact })
    setIsSuccess(true)
    setTimeout(() => {
      closeModal()
    }, 2000)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-surface/90 px-6 py-10 sm:px-10 sm:py-12 shadow-sm shadow-black/5 dark:shadow-black/40 overflow-hidden relative"
        >
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br from-accent/40 via-accent-muted/20 to-transparent blur-3xl opacity-80"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-24 bottom-[-120px] h-64 w-64 rounded-full bg-gradient-to-tr from-black/5 via-transparent to-accent/15 dark:from-white/5 dark:to-accent/25 blur-3xl opacity-80"
            aria-hidden="true"
          />

          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-10">
            <div className="flex-1">
              <p className="text-[13px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] text-text-muted/70 mb-3 leading-relaxed">
                Ассортимент будет расширяться
              </p>
              <h2 className="text-[24px] leading-[1.3] sm:text-2xl sm:leading-[1.35] lg:text-3xl lg:leading-[1.3] font-semibold text-text mb-4 font-display">
                Сейчас кулон. Потом — брелок и браслет
              </h2>
              <p className="text-[14px] leading-[1.65] sm:text-sm sm:leading-[1.7] lg:text-base lg:leading-[1.75] text-text-muted max-w-lg">
                Готовим новые форматы — чтобы Клевер подошёл каждому.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-accent/12 via-accent-muted/10 to-transparent px-5 py-6 backdrop-blur-sm flex flex-col h-full"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface/70 px-3 py-1 text-[13px] sm:text-xs text-accent font-medium">
                  <KeyRound className="w-3.5 h-3.5 text-accent" strokeWidth={1.7} />
                  Скоро в продаже
                </div>
                <p className="text-[15px] sm:text-sm font-medium text-text mb-2">{items[0].label}</p>
                <p className="text-[14px] sm:text-xs text-text-muted leading-[1.6] sm:leading-relaxed mb-4 flex-grow">{items[0].desc}</p>
                <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-accent/20 via-accent-muted/15 to-transparent blur-xl opacity-60 dark:opacity-50 flex items-center justify-center mb-4">
                  <KeyRound className="w-8 h-8 text-accent/40" strokeWidth={1.5} />
                </div>
                <motion.button
                  onClick={() => openModal(items[0].label)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2.5 rounded-xl border border-accent/50 bg-accent/10 text-[14px] sm:text-xs font-medium text-accent hover:bg-accent/20 transition-colors duration-300 mt-auto"
                >
                  Когда поступит?
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-accent-muted/15 via-accent/10 to-transparent px-5 py-6 backdrop-blur-sm flex flex-col h-full"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface/70 px-3 py-1 text-[13px] sm:text-xs text-accent font-medium">
                  <LinkIcon className="w-3.5 h-3.5 text-accent" strokeWidth={1.7} />
                  Скоро в продаже
                </div>
                <p className="text-[15px] sm:text-sm font-medium text-text mb-2">{items[1].label}</p>
                <p className="text-[14px] sm:text-xs text-text-muted leading-[1.6] sm:leading-relaxed mb-4 flex-grow">{items[1].desc}</p>
                <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-accent-muted/20 via-accent/15 to-transparent blur-xl opacity-60 dark:opacity-50 flex items-center justify-center mb-4">
                  <LinkIcon className="w-8 h-8 text-accent/40" strokeWidth={1.5} />
                </div>
                <motion.button
                  onClick={() => openModal(items[1].label)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2.5 rounded-xl border border-accent/50 bg-accent/10 text-[14px] sm:text-xs font-medium text-accent hover:bg-accent/20 transition-colors duration-300 mt-auto"
                >
                  Когда поступит?
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
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
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <p className="text-xl font-semibold text-accent mb-2 font-display">Спасибо!</p>
                  <p className="text-text-muted text-[14px] sm:text-sm">
                    Мы уведомим вас заранее перед началом продаж {selectedProduct?.toLowerCase()}.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-text font-display">
                      Уведомление о поступлении
                    </h3>
                    <button
                      onClick={closeModal}
                      className="p-1 rounded-full hover:bg-bg transition-colors duration-200"
                      aria-label="Закрыть"
                    >
                      <X className="w-5 h-5 text-text-muted" />
                    </button>
                  </div>
                  <p className="text-text-muted mb-6 leading-relaxed text-[14px] sm:text-sm">
                    Вы можете оставить свои контакты, и мы заранее перед началом продаж{' '}
                    {selectedProduct?.toLowerCase()} уведомим вас.
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
                      Уведомить меня
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

