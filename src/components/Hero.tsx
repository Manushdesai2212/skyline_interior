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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Animated Blob */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-accent-primary/20 rounded-full filter blur-3xl animate-blob"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 container-max px-4 text-center text-white"
      >
        <motion.div variants={itemVariants} className="eyebrow-text text-white/80 mb-4">
          Premium Interior Design
        </motion.div>

        <motion.h1 variants={itemVariants} className="heading-xl text-white mb-6">
          Spaces That Feel Like Home
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Transform your space into a masterpiece with our expert interior design services
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact" className="button-primary">
            Get a Free Quote
          </a>
          <a href="#portfolio" className="button-secondary">
            View Our Work
          </a>
        </motion.div>

        {/* Trust Strip */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16 bg-white/10 backdrop-blur-md rounded-2xl p-6">
          <div>
            <div className="text-3xl font-bold text-white">{displayStats.experience}+</div>
            <div className="text-sm text-white/80">Years Experience</div>
          </div>
          <div className="border-l border-r border-white/20">
            <div className="text-3xl font-bold text-white">{GOOGLE_RATING}★</div>
            <div className="text-sm text-white/80">{displayStats.reviews} Google Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">{displayStats.likes >= 3242 ? FACEBOOK_LIKES : displayStats.likes.toLocaleString()}</div>
            <div className="text-sm text-white/80">Facebook Likes</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </motion.div>
    </section>
  )
}
