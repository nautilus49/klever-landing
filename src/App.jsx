import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LifestyleSection from './components/LifestyleSection'
import ProblemSection from './components/ProblemSection'
import VisualDivider from './components/VisualDivider'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import TrustStats from './components/TrustStats'
import ProductShowcase from './components/ProductShowcase'
import FutureProducts from './components/FutureProducts'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = window.localStorage.getItem('klever-theme')
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
      document.documentElement.dataset.theme = stored
      return
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    const initial = prefersDark ? 'dark' : 'light'
    setTheme(initial)
    document.documentElement.dataset.theme = initial
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      window.localStorage.setItem('klever-theme', next)
      return next
    })
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Navbar onOrder={openModal} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero onOrder={openModal} />
        <LifestyleSection />
        <ProblemSection />
        <VisualDivider />
        <HowItWorks />
        <VisualDivider />
        <Features />
        <TrustStats />
        <VisualDivider />
        <ProductShowcase onOrder={openModal} />
        <FutureProducts />
        <FAQ />
        <FinalCTA onOrder={openModal} />
        <SocialLinks />
        <Footer />
      </main>
      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default App
