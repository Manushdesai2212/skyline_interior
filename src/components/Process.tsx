import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PROCESS_STEPS } from '@/lib/constants'

export default function Process() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section id="process" className="section-padding bg-bg dark:bg-bg-dark">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <div className="eyebrow-text mb-4">Our Process</div>
          <h2 className="heading-lg mb-6">Design in 5 Simple Steps</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary" />

          <div className="grid lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center text-white font-bold text-2xl mb-4 relative z-10"
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-center mb-2">{step.title}</h3>
                  <p className="text-sm text-text-muted dark:text-text-muted-dark text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
