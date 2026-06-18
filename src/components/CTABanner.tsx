import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTABanner() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section className="relative overflow-hidden border-y-[3px] border-border bg-accent-secondary section-padding dark:border-border-dark">
      <div className="absolute right-8 top-8 h-28 w-40 border-[3px] border-border bg-accent-primary shadow-lg dark:border-border" />
      <div className="absolute bottom-8 left-8 h-24 w-24 border-[3px] border-border bg-accent-tertiary shadow-lg dark:border-border" />

      <div ref={ref} className="container-max text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <h2 className="heading-lg mb-4 text-text-primary">Ready to Transform Your Space?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg font-medium text-text-primary">
            Let's bring your interior design vision to life with our expert team and personalized approach.
          </p>
          <a
            href="#contact"
            className="button-primary px-8 py-4 text-lg"
          >
            Book Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
