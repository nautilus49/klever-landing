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

  useEffect(() => {
    const updateTheme = () => {
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
      const theme = prefersDark ? 'dark' : 'light'
      document.documentElement.dataset.theme = theme
    }

    // Устанавливаем начальную тему
    updateTheme()

    // Слушаем изменения системной темы
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', updateTheme)
      return () => mediaQuery.removeEventListener('change', updateTheme)
    } else if (mediaQuery?.addListener) {
      // Для старых браузеров
      mediaQuery.addListener(updateTheme)
      return () => mediaQuery.removeListener(updateTheme)
    }
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Navbar onOrder={openModal} />
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
