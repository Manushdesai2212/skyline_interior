import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { FACEBOOK_LIKES, GOOGLE_RATING, GOOGLE_REVIEWS } from '@/lib/constants'

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [displayStats, setDisplayStats] = useState({ experience: 0, reviews: 0, likes: 0 })

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setDisplayStats(prev => ({
          experience: prev.experience < 10 ? prev.experience + 1 : 10,
          reviews: prev.reviews < GOOGLE_REVIEWS ? prev.reviews + 2 : GOOGLE_REVIEWS,
          likes: prev.likes < 3242 ? Math.min(prev.likes + 120, 3242) : 3242,
        }))
      }, 30)
      return () => clearInterval(interval)
    }
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg pt-20 dark:bg-bg-dark">
      <div className="absolute right-8 top-28 h-32 w-32 border-[3px] border-border bg-accent-secondary shadow-lg dark:border-border-dark" />
      <div className="absolute bottom-16 left-8 h-20 w-44 border-[3px] border-border bg-accent-tertiary shadow-lg dark:border-border-dark" />

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-max relative z-10 grid items-center gap-12 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:text-left"
      >
        <div>
          <motion.div variants={itemVariants} className="eyebrow-text mb-4">
            Premium Interior Design
          </motion.div>

          <motion.h1 variants={itemVariants} className="heading-xl mb-6 text-text-primary dark:text-text-primary-dark">
            Spaces That Feel Like Home
          </motion.h1>

          <motion.p variants={itemVariants} className="mb-8 max-w-2xl text-xl font-medium text-text-muted dark:text-text-muted-dark">
            Transform your space into a masterpiece with our expert interior design services
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12 flex flex-col gap-4 sm:flex-row lg:mb-16">
            <a href="#contact" className="button-primary">
              Get a Free Quote
            </a>
            <a href="#portfolio" className="button-secondary">
              View Our Work
            </a>
          </motion.div>

          {/* Trust Strip */}
          <motion.div variants={itemVariants} className="grid max-w-2xl grid-cols-3 gap-4 border-[3px] border-border bg-surface p-6 text-center text-text-primary shadow-lg dark:border-border-dark dark:bg-surface-dark dark:text-text-primary-dark">
            <div>
              <div className="font-serif text-3xl font-black">{displayStats.experience}+</div>
              <div className="font-mono text-xs font-bold uppercase">Years Experience</div>
            </div>
            <div className="border-x-[3px] border-border dark:border-border-dark">
              <div className="font-serif text-3xl font-black">{GOOGLE_RATING}★</div>
              <div className="font-mono text-xs font-bold uppercase">{displayStats.reviews} Google Reviews</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-black">{displayStats.likes >= 3242 ? FACEBOOK_LIKES : displayStats.likes.toLocaleString()}</div>
              <div className="font-mono text-xs font-bold uppercase">Facebook Likes</div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative mx-auto w-full max-w-xl rotate-[-1.5deg] border-[3px] border-border bg-surface p-3 shadow-lg dark:border-border-dark dark:bg-surface-dark">
          <img
            src="/images/Hero_image.jpg"
            alt="Interior Design"
            className="aspect-[4/3] w-full border-[3px] border-border object-cover dark:border-border-dark"
          />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-text-primary opacity-70 dark:text-text-primary-dark" />
      </motion.div>
    </section>
  )
}
