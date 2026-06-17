import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-surface dark:bg-surface-dark">
      <div className="container-max max-w-2xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <div className="eyebrow-text mb-4">FAQs</div>
          <h2 className="heading-lg">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="space-y-4"
        >
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="card-base"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-center justify-between"
              >
                <h3 className="font-semibold text-left">{item.question}</h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent-primary flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-border dark:border-border-dark mt-4">
                      <p className="text-text-muted dark:text-text-muted-dark">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center card-base"
        >
          <p className="text-text-muted dark:text-text-muted-dark mb-4">
            Still have questions? Contact us for a personalized consultation.
          </p>
          <a href="#contact" className="button-primary inline-block">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
