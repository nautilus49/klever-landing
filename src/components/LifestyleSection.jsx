import { motion } from 'framer-motion'

export default function LifestyleSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl mx-auto"
      >
        <div className="w-full rounded-2xl overflow-hidden border border-border mx-auto max-w-md shadow-sm">
          <img
            src={`${import.meta.env.BASE_URL}images/klever-on-girl.png`}
            alt="Кулон Клевер на девушке"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </section>
  )
}
