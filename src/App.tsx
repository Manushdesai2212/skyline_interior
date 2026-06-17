import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-bg dark:bg-bg-dark text-text-primary dark:text-text-primary-dark transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Process />
          <Portfolio />
          <Stats />
          <Testimonials />
          <FAQ />
          <CTABanner />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
