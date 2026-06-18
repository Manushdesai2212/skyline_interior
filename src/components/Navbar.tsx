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
      const sections = ['home', 'about', 'portfolio', 'services', 'process', 'style-quiz', 'testimonials', 'faq', 'contact']
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
      className={`fixed z-50 w-full bg-bg transition-all duration-150 dark:bg-bg-dark ${
        isScrolled ? 'border-b-[3px] border-border dark:border-border-dark' : ''
      }`}
    >
      <div className="container-max flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center border-[3px] border-border bg-accent-primary font-mono text-lg font-bold text-text-primary shadow-sm dark:border-border-dark dark:bg-accent-primary-dark">
            S
          </div>
          <span className="hidden font-serif text-xl font-black uppercase sm:inline">Skyline</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-mono text-xs font-bold uppercase tracking-wider text-text-muted transition-colors hover:text-text-primary dark:text-text-muted-dark dark:hover:text-text-primary-dark"
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-primary"
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
          className="border-t-[3px] border-border bg-surface dark:border-border-dark dark:bg-surface-dark lg:hidden"
        >
          <div className="container-max px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b-[3px] border-border py-2 font-mono text-xs font-bold uppercase tracking-wider text-text-muted transition-colors hover:text-text-primary dark:border-border-dark dark:text-text-muted-dark dark:hover:text-text-primary-dark"
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
