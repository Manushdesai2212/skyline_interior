import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'testimonials', 'faq', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg/95 dark:bg-bg-dark/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <span className="font-serif font-bold text-xl hidden sm:inline">Skyline</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-text-muted hover:text-text-primary transition-colors"
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" className="hidden sm:flex button-primary py-2 px-4 text-sm">
            Free Consultation
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-surface dark:bg-surface-dark border-t border-border dark:border-border-dark"
        >
          <div className="container-max px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-text-muted hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="button-primary w-full mt-4"
            >
              Free Consultation
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
