import { motion } from 'framer-motion'
import { User, Heart, Gift } from 'lucide-react'

const audiences = [
  {
    icon: Heart,
    title: 'Для тех, о ком заботитесь',
    text: 'Красивое украшение для близкого человека. Когда он поздно возвращается домой или в дороге — вы всегда будете знать, что всё в порядке.',
  },
  {
    icon: User,
    title: 'Для себя',
    text: 'Элегантный кулон, который вписывается в любой образ. Остаётся с вами на прогулках, вечеринках и в поездках.',
  },
  {
    icon: Gift,
    title: 'Подарок с заботой',
    text: 'Школа, кружки, дорога домой — одно касание, и вы видите, где близкий человек и что ему нужна помощь.',
  },
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
          className="text-[24px] leading-[1.3] sm:text-2xl sm:leading-[1.35] lg:text-3xl lg:leading-[1.3] font-semibold text-center text-text mb-4 font-display"
        >
          Для тех, о ком заботитесь
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-text-muted text-center max-w-xl mx-auto mb-12 text-[14px] leading-[1.65] sm:text-sm sm:leading-[1.7]"
        >
          Клевер — это способ показать заботу и дать близкому человеку чувство защищённости.
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
              <h3 className="text-text font-medium mb-3 font-display text-[15px] sm:text-base leading-[1.4]">{item.title}</h3>
              <p className="text-text-muted text-[13px] sm:text-sm leading-[1.65] sm:leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
