import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, Clock, Check, AlertCircle, Loader } from 'lucide-react'
import { contactFormSchema, ContactFormData } from '@/lib/formSchema'
import { BUSINESS_PHONE, BUSINESS_PHONE_HREF, BUSINESS_EMAIL, BUSINESS_ADDRESS, BUSINESS_MAP_EMBED_URL, WORKING_HOURS } from '@/lib/constants'

const PROJECT_TYPE_LABELS: Record<ContactFormData['projectType'], string> = {
  residential: 'Residential',
  commercial: 'Commercial',
  architecture: 'Architecture',
  set_design: 'Set Design',
  landscape: 'Landscape Work',
  renovation: 'Renovation',
  other: 'Other',
}

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading')
    try {
      const subject = `New consultation inquiry from ${data.name}`
      const body = [
        'Hello Skyline Interior,',
        '',
        'I would like to discuss an interior design project.',
        '',
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Project Type: ${PROJECT_TYPE_LABELS[data.projectType]}`,
        '',
        'Message:',
        data.message,
      ].join('\n')

      window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="section-padding bg-surface dark:bg-surface-dark">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <div className="eyebrow-text mb-4">Get In Touch</div>
          <h2 className="heading-lg">Let's Start Your Project</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-border-dark bg-bg dark:bg-bg-dark focus:outline-none focus:border-accent-primary transition-colors"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-border-dark bg-bg dark:bg-bg-dark focus:outline-none focus:border-accent-primary transition-colors"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  {...register('phone')}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-border-dark bg-bg dark:bg-bg-dark focus:outline-none focus:border-accent-primary transition-colors"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  {...register('projectType')}
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-border-dark bg-bg dark:bg-bg-dark focus:outline-none focus:border-accent-primary transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="architecture">Architecture</option>
                  <option value="set_design">Set Design</option>
                  <option value="landscape">Landscape Work</option>
                  <option value="renovation">Renovation</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  {...register('message')}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-border-dark bg-bg dark:bg-bg-dark focus:outline-none focus:border-accent-primary transition-colors resize-none"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="button-primary w-full flex items-center justify-center gap-2"
              >
                {submitStatus === 'loading' && <Loader className="w-5 h-5 animate-spin" />}
                {submitStatus === 'success' && (
                  <>
                    <Check className="w-5 h-5" />
                    Email Draft Opened
                  </>
                )}
                {submitStatus === 'error' && (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Try Again
                  </>
                )}
                {submitStatus === 'idle' && 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {BUSINESS_PHONE && (
              <div className="card-base flex gap-4">
                <Phone className="w-6 h-6 text-accent-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-text-muted dark:text-text-muted-dark">Phone</p>
                  <a href={`tel:${BUSINESS_PHONE_HREF}`} className="font-semibold hover:text-accent-primary transition-colors">
                    {BUSINESS_PHONE}
                  </a>
                </div>
              </div>
            )}

            <div className="card-base flex gap-4">
              <Mail className="w-6 h-6 text-accent-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-text-muted dark:text-text-muted-dark">Email</p>
                <a href={`mailto:${BUSINESS_EMAIL}`} className="font-semibold hover:text-accent-primary transition-colors">
                  {BUSINESS_EMAIL}
                </a>
              </div>
            </div>

            <div className="card-base flex gap-4">
              <MapPin className="w-6 h-6 text-accent-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-text-muted dark:text-text-muted-dark">Address</p>
                <p className="font-semibold">{BUSINESS_ADDRESS}</p>
              </div>
            </div>

            <div className="card-base flex gap-4">
              <Clock className="w-6 h-6 text-accent-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-text-muted dark:text-text-muted-dark">Working Hours</p>
                <p className="font-semibold">{WORKING_HOURS}</p>
              </div>
            </div>

            {/* Embedded Map */}
            <iframe
              src={BUSINESS_MAP_EMBED_URL}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
