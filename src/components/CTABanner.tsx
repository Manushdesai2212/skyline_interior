import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTABanner() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section className="relative section-padding bg-gradient-to-r from-accent-secondary to-accent-tertiary overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], y: [-50, 50, -50] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], y: [50, -50, 50] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div ref={ref} className="container-max text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's bring your interior design vision to life with our expert team and personalized approach.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-accent-secondary bg-white hover:bg-white/90 transition-all duration-200 hover:shadow-xl text-lg"
          >
            Book Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
