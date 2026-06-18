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
              <div className="flex h-10 w-10 items-center justify-center border-[3px] border-white bg-accent-primary font-mono font-bold shadow-sm">
                S
              </div>
              <span className="font-serif text-lg font-black uppercase">{BUSINESS_NAME}</span>
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
          className="flex flex-col items-center justify-between border-t-[3px] border-white pt-8 sm:flex-row"
        >
          <div className="flex gap-4 mb-4 sm:mb-0">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-[3px] border-white bg-transparent p-2 transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:bg-accent-secondary hover:text-text-primary"
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
