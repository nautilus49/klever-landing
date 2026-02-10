import { motion } from 'framer-motion'
import { User, Heart, Gift } from 'lucide-react'

const audiences = [
  { icon: User, title: 'Для себя', text: 'Работаете допоздна, гуляете в одиночестве или путешествуете — спокойствие, что помощь на расстоянии нажатия.' },
  { icon: Heart, title: 'Для близких', text: 'Родители в другом городе, дети в школе, партнёр в командировке — вы всегда в курсе, если что-то случилось.' },
  { icon: Gift, title: 'В подарок', text: 'Практичный и заботливый подарок. Показывает, что вы думаете о безопасности того, кто вам дорог.' },
]

export default function TargetAudience() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-center text-text mb-4 font-display"
        >
          Кому подойдёт
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-text-muted text-center max-w-xl mx-auto mb-12"
        >
          Клевер создан для тех, кто ценит спокойствие и близких
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 text-center shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-text font-medium mb-3 font-display">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
