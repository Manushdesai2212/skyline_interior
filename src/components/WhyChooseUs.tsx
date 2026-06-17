import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { USP_ITEMS } from '@/lib/constants'

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section className="section-padding bg-surface dark:bg-surface-dark">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <div className="eyebrow-text mb-4">Why Choose Us</div>
          <h2 className="heading-lg">Our Unique Value Proposition</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {USP_ITEMS.map((item, index) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons] as LucideIcon | undefined
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-primary/10">
                    {IconComponent && <IconComponent className="w-6 h-6 text-accent-primary" />}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-muted dark:text-text-muted-dark">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
