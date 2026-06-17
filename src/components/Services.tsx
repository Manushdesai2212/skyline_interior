import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="section-padding bg-bg dark:bg-bg-dark">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <div className="eyebrow-text mb-4">What We Offer</div>
          <h2 className="heading-lg mb-6">Our Design Services</h2>
          <p className="text-text-muted dark:text-text-muted-dark max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to your unique needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as LucideIcon | undefined
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-hover group"
              >
                <div className="p-4 bg-accent-primary/10 rounded-2xl w-fit mb-4 group-hover:bg-accent-primary/20 transition-colors">
                  {IconComponent && <IconComponent className="w-8 h-8 text-accent-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-text-muted dark:text-text-muted-dark">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
