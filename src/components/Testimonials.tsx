import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setAutoPlay(false)
  }

  return (
    <section id="testimonials" className="section-padding bg-bg dark:bg-bg-dark">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <div className="eyebrow-text mb-4">Testimonials</div>
          <h2 className="heading-lg">What Our Clients Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          className="relative max-w-2xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="card-base text-center p-8"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-primary text-accent-primary" />
                ))}
              </div>

              <p className="text-lg mb-6 italic text-text-muted dark:text-text-muted-dark">
                "{TESTIMONIALS[currentIndex].quote}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={TESTIMONIALS[currentIndex].avatar}
                  alt={TESTIMONIALS[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold">{TESTIMONIALS[currentIndex].name}</p>
                  <p className="text-sm text-text-muted dark:text-text-muted-dark">
                    {TESTIMONIALS[currentIndex].project}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 rounded-full bg-accent-primary/10 hover:bg-accent-primary/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 rounded-full bg-accent-primary/10 hover:bg-accent-primary/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoPlay(false)
                }}
                className={`transition-all ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-accent-primary'
                    : 'w-2 h-2 bg-accent-primary/30 hover:bg-accent-primary/50'
                } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
