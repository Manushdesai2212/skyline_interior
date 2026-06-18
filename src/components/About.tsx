import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { BUSINESS_TAGLINE, FACEBOOK_LIKES, GOOGLE_RATING, GOOGLE_REVIEWS } from '@/lib/constants'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [stats, setStats] = useState({ years: 0, projects: 0, clients: 0, cities: 0 })

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setStats(prev => ({
          years: prev.years < 10 ? prev.years + 1 : 10,
          projects: prev.projects < 200 ? prev.projects + 10 : 200,
          clients: prev.clients < 500 ? prev.clients + 25 : 500,
          cities: prev.cities < 5 ? prev.cities + 1 : 5,
        }))
      }, 30)
      return () => clearInterval(interval)
    }
  }, [inView])

  return (
    <section id="about" className="section-padding bg-surface dark:bg-surface-dark">
      <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop"
            alt="About Skyline Interior"
            className="w-full border-[3px] border-border object-cover shadow-lg dark:border-border-dark"
          />
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <div className="eyebrow-text mb-4">About Us</div>
          <h2 className="heading-lg mb-6">Crafting Spaces, Creating Experiences</h2>
          
          <p className="body-text mb-6">
            At Skyline Interior, we believe that every space tells a story. With over a decade of experience, we've transformed hundreds of homes and commercial spaces into sanctuaries of style and comfort.
          </p>

          <p className="body-text mb-8">
            <em>"{BUSINESS_TAGLINE}."</em> Trusted locally with a {GOOGLE_RATING} star Google rating from {GOOGLE_REVIEWS} reviews and {FACEBOOK_LIKES} Facebook likes.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="card-base">
              <div className="text-3xl font-bold text-accent-primary">{stats.years}+</div>
              <div className="text-sm text-text-muted dark:text-text-muted-dark">Years Active</div>
            </div>
            <div className="card-base">
              <div className="text-3xl font-bold text-accent-primary">{stats.projects}+</div>
              <div className="text-sm text-text-muted dark:text-text-muted-dark">Projects Done</div>
            </div>
            <div className="card-base">
              <div className="text-3xl font-bold text-accent-primary">{stats.clients}+</div>
              <div className="text-sm text-text-muted dark:text-text-muted-dark">Happy Clients</div>
            </div>
            <div className="card-base">
              <div className="text-3xl font-bold text-accent-primary">{stats.cities}</div>
              <div className="text-sm text-text-muted dark:text-text-muted-dark">Cities Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
