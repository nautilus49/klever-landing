import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Нужен ли смартфон для работы?',
    a: 'Да. Кулон подключается к телефону по Bluetooth и через приложение отправляет сигнал и геолокацию выбранным людям. Телефон может быть в кармане — главное, чтобы Bluetooth был включён.',
  },
  {
    q: 'Кто получит сигнал SOS?',
    a: 'В приложении вы сами добавляете контакты — семью, друзей, партнёра. Они получат push и сообщение в Telegram с вашей геолокацией.',
  },
  {
    q: 'Кулон заметен?',
    a: 'Нет. Смотрится как обычное украшение. Нажатие похоже на поправку кулона — со стороны не понять, что вы вызываете помощь.',
  },
  {
    q: 'Есть ли доставка по России?',
    a: 'Да, по всей России. Сроки зависят от региона. После заказа вышлем трек для отслеживания.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[24px] leading-[1.3] sm:text-2xl sm:leading-[1.35] lg:text-3xl lg:leading-[1.3] font-semibold text-center text-text mb-4 font-display"
        >
          Частые вопросы
        </motion.h2>

        <div className="space-y-2">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-surface overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-text hover:bg-accent/5 transition-colors"
              >
                <span className="font-medium text-[14px] leading-[1.5] sm:text-sm sm:leading-[1.6] lg:text-base lg:leading-[1.65]">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  strokeWidth={2}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-border"
                  >
                    <p className="px-5 py-4 text-text-muted text-[14px] leading-[1.65] sm:text-sm sm:leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
