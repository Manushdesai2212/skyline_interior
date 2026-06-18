import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { STATS } from '@/lib/constants'

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [displayValues, setDisplayValues] = useState(STATS.map(() => 0))

  useEffect(() => {
    if (!inView) return

    const intervals = STATS.map((stat, index) => {
      return setInterval(() => {
        setDisplayValues(prev => {
          const newValues = [...prev]
          if (newValues[index] < stat.value) {
            newValues[index] = Math.min(newValues[index] + Math.ceil(stat.value / 50), stat.value)
          }
          return newValues
        })
      }, 30)
    })

    return () => intervals.forEach(clearInterval)
  }, [inView])

  return (
    <section className="relative overflow-hidden border-y-[3px] border-border bg-accent-primary section-padding dark:border-border-dark dark:bg-accent-primary-dark">
      <div className="absolute right-8 top-8 h-32 w-32 border-[3px] border-border bg-accent-secondary shadow-lg dark:border-border" />
      <div className="absolute bottom-8 left-8 h-24 w-48 border-[3px] border-border bg-accent-tertiary shadow-lg dark:border-border" />

      <div ref={ref} className="container-max relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="border-[3px] border-border bg-surface p-6 text-center text-text-primary shadow-lg dark:border-border dark:bg-bg"
            >
              <div className="text-5xl sm:text-6xl font-bold mb-2">
                {'display' in stat ? stat.display : `${displayValues[index]}${stat.suffix ?? ''}`}
              </div>
              <p className="text-lg opacity-90">{stat.label}</p>
              {'detail' in stat && <p className="text-sm opacity-80 mt-1">{stat.detail}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
