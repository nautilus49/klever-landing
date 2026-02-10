import { motion } from 'framer-motion'
import { Battery, Droplets, Sparkles, Smartphone, Shield } from 'lucide-react'

const features = [
  {
    icon: Battery,
    title: '1 год без подзарядки',
    text: 'Встроенная батарея держит заряд до 12 месяцев. Ставите и забываете.',
  },
  {
    icon: Droplets,
    title: 'Защита от воды',
    text: 'Можно не снимать в душе и под дождём. IPX5 — брызги и пот не страшны.',
  },
  {
    icon: Sparkles,
    title: 'Неотличим от украшения',
    text: 'Дизайн разработан так, чтобы кулон выглядел как элегантный аксессуар.',
  },
  {
    icon: Smartphone,
    title: 'Приложение и Telegram',
    text: 'Бесплатное приложение, уведомления в Telegram. Без подписок и скрытых платежей.',
  },
  {
    icon: Shield,
    title: 'Надёжность',
    text: 'Гарантия 1 год. Сделано с учётом российских условий — холод, жара, вибрация.',
  },
]

export default function Features() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-center text-cream mb-4 font-display"
        >
          Что внутри
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[#a3a3a3] text-center max-w-lg mx-auto mb-14"
        >
          Технологии, которые работают незаметно для окружающих
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-white/[0.03] border border-white/5 hover:border-gold/20 transition-all duration-300"
            >
              <item.icon className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
              <h3 className="text-cream font-medium mb-2 font-display">{item.title}</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
