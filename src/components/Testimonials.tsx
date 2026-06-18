import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Star } from 'lucide-react'
import { GOOGLE_RATING, GOOGLE_REVIEWS } from '@/lib/constants'

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Skyline+Interior/@22.1618508,72.8441906,15z/data=!4m6!3m5!1s0x395c2a140597b4b1:0x86b0c581889e7fa3!8m2!3d22.1618508!4d72.863245!16s%2Fg%2F11gdmm94lf'

const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=skyline+interior&rlz=1C5CHFA_enIN1117IN1117&oq=sky&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIVCAEQLhhDGMcBGLEDGNEDGIAEGIoFMgYIAhBFGDsyDAgDECMYJxjwBRieBjIYCAQQLhhDGMcBGLEDGMkDGNEDGIAEGIoFMg8IBRAAGEMYsQMYgAQYigUyDAgGEAAYQxiABBiKBTIMCAcQABhDGIAEGIoFMg8ICBAAGEMYsQMYgAQYigXSAQkxOTQ0ajBqMTWoAgiwAgHxBWbBOVhAvH15&sourceid=chrome&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FNbjMteVNycEJaYzBjNnIySUFWZU9YWWlQQXM5dXV2cUxmRVMwY1hnQXdKdzRtMjh5WDlfT2x2VU1mbVhDblhqWjVOV3Rmb20zWmdfZDlybDVXd3BpUmc5Uk9jelpFV2l2MlM5aTZDNU5QUkNlRDRTaWJjVlg4EhdzNU16YXByR0pyQ2duZXNQMExhVjhBURoiQUpLTEZtSlJtVjRaOE9ZcHhkTDZTQ045bHRoTWljNzd6URIEODA1MRoBMyoAMAA4AUAAGAAgpKS7VEoCEAI'

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section id="testimonials" className="section-padding bg-bg dark:bg-bg-dark">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="eyebrow-text mb-4">Reviews</div>

          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 border-[3px] border-border bg-surface px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-text-primary shadow-sm dark:border-border-dark dark:bg-surface-dark dark:text-text-primary-dark">
            <span className="flex items-center gap-0.5" aria-label={`${GOOGLE_RATING} stars rated on Google`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    index < 4
                      ? 'fill-accent-primary text-accent-primary'
                      : 'fill-accent-primary/70 text-accent-primary'
                  }`}
                />
              ))}
            </span>
            <span>{GOOGLE_RATING} Rated on Google</span>
            <span className="text-text-muted dark:text-text-muted-dark">·</span>
            <span>{GOOGLE_REVIEWS} Reviews</span>
          </div>

          <h2 className="heading-lg mb-4">See what our clients are saying</h2>
          <p className="body-text mx-auto mb-8 max-w-2xl">
            Read real Google feedback from homeowners and businesses who have worked with Skyline Interior.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2 }}
            className="card-base mx-auto flex max-w-2xl flex-col items-center gap-4 p-6 sm:flex-row sm:justify-center"
          >
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary w-full gap-2 sm:w-auto"
            >
              Read our reviews on Google
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary w-full gap-2 sm:w-auto"
            >
              Leave us a review
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
