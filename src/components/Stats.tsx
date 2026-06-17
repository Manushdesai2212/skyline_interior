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
    <section className="relative section-padding bg-gradient-to-r from-accent-primary to-accent-tertiary overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [-50, 0, -50] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div ref={ref} className="container-max relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white"
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
