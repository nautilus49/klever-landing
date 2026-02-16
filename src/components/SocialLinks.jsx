import { motion } from 'framer-motion'
import { Send, MessageCircle, Music2, Instagram } from 'lucide-react'

const socialLinks = [
  {
    icon: Send,
    name: 'Telegram',
    href: '#',
    color: 'text-blue-500',
  },
  {
    icon: MessageCircle,
    name: 'VK',
    href: '#',
    color: 'text-blue-600',
  },
  {
    icon: Music2,
    name: 'TikTok',
    href: '#',
    color: 'text-black dark:text-white',
  },
  {
    icon: Instagram,
    name: 'Instagram',
    href: '#',
    color: 'text-pink-600',
    hasNote: true,
  },
]

export default function SocialLinks() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[18px] sm:text-xl font-medium text-center text-text mb-6 font-display"
        >
          Мы в соцсетях
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
        >
          {socialLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-border bg-bg flex items-center justify-center transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/5">
                <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color}`} strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <p className="text-[14px] sm:text-sm font-medium text-text">
                  {item.name}
                  {item.hasNote && <span className="text-[10px] text-text-muted/70 ml-0.5">*</span>}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-right text-[10px] sm:text-[11px] text-text-muted/50"
        >
          <span className="mr-0.5">*</span>
          Запрещён в России
        </motion.p>
      </div>
    </section>
  )
}
