import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLenis } from './hooks/useLenis'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero/HeroSection'
import TrustBar from './components/TrustBar'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import TeamSection from './components/TeamSection'
import InsightsSection from './components/InsightsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isDark, setIsDark] = useState(() => {
    // Default to dark mode as it was the original theme, or read from localStorage
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  useLenis()

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <>
      {/* Loading screen — unmounts and fades out using AnimatePresence */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Custom cursor — desktop only */}
      <CustomCursor />

      {/* Main site — rendered immediately, visible after loading */}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.6s ease',
          minHeight: '100vh',
        }}
      >
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <main>
          <HeroSection />
          <TrustBar />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <CaseStudies />
          <Testimonials />
          <TeamSection />
          <InsightsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
