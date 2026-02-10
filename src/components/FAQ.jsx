import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Нужен ли смартфон для работы?',
    a: 'Да. Кулон связывается со смартфоном по Bluetooth и через приложение отправляет сигнал и геолокацию выбранным контактам. Смартфон может лежать в кармане или сумке — главное, чтобы Bluetooth был включён.',
  },
  {
    q: 'Как часто нужно заряжать?',
    a: 'Примерно раз в год. Встроенная батарея рассчитана на 12 месяцев автономной работы при обычном использовании. Когда заряд заканчивается, кулон и приложение заранее предупредят.',
  },
  {
    q: 'Кто получит сигнал SOS?',
    a: 'Вы сами выбираете контакты в приложении — родственники, друзья, партнёр. Они получат push-уведомление и сообщение в Telegram (если подключили) с вашей геолокацией.',
  },
  {
    q: 'Кулон заметен?',
    a: 'Нет. Дизайн разработан так, чтобы кулон выглядел как обычное украшение. Нажатие кнопки выглядит как поправка кулона — окружающие не поймут, что вы вызываете помощь.',
  },
  {
    q: 'Есть ли доставка по России?',
    a: 'Да, доставляем по всей России. Сроки зависят от региона. После оформления заказа мы вышлем трек-номер для отслеживания.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-center text-cream mb-4 font-display"
        >
          Частые вопросы
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[#a3a3a3] text-center mb-12"
        >
          Ответы на то, что обычно спрашивают
        </motion.p>

        <div className="space-y-2">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-cream hover:bg-white/[0.03] transition-colors"
              >
                <span className="font-medium text-sm sm:text-base">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold shrink-0 transition-transform duration-200 ${
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
                    className="overflow-hidden border-t border-white/5"
                  >
                    <p className="px-5 py-4 text-[#a3a3a3] text-sm leading-relaxed">{item.a}</p>
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
