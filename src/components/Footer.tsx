import { motion } from 'framer-motion'
import { Globe, MessageCircle, Mail, Phone } from 'lucide-react'
import { BUSINESS_NAME, BUSINESS_EMAIL, BUSINESS_PHONE, BUSINESS_PHONE_HREF, NAV_LINKS, SERVICES, SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5" />
      case 'Mail':
        return <Mail className="w-5 h-5" />
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5" />
      default:
        return null
    }
  }

  return (
    <footer className="bg-text-primary dark:bg-bg-dark text-white dark:text-text-primary-dark">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding"
      >
        <div className="container-max grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center font-bold">
                S
              </div>
              <span className="font-serif font-bold text-lg">{BUSINESS_NAME}</span>
            </div>
            <p className="text-white/70 dark:text-text-muted-dark">
              Premium interior design studio transforming spaces into experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              {BUSINESS_PHONE && (
                <a href={`tel:${BUSINESS_PHONE_HREF}`} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  {BUSINESS_PHONE}
                </a>
              )}
              <a href={`mailto:${BUSINESS_EMAIL}`} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                {BUSINESS_EMAIL}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between"
        >
          <div className="flex gap-4 mb-4 sm:mb-0">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={link.label}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>

          <p className="text-white/70 text-sm">
            © {currentYear} {BUSINESS_NAME}. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
