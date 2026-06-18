import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { BUSINESS_WHATSAPP_NUMBER } from '@/lib/constants'

export default function WhatsAppButton() {
  if (!BUSINESS_WHATSAPP_NUMBER) {
    return null
  }

  const whatsappLink = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=Hi%20Skyline%20Interior%2C%20I%20would%20like%20to%20discuss%20my%20interior%20design%20project.`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 border-[3px] border-border bg-accent-secondary p-3 text-text-primary shadow-lg transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-sm dark:border-border-dark"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  )
}
