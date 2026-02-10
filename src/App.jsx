import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LifestyleSection from './components/LifestyleSection'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import TargetAudience from './components/TargetAudience'
import TrustStats from './components/TrustStats'
import ProductGallery from './components/ProductGallery'
import ProductShowcase from './components/ProductShowcase'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Navbar onOrder={openModal} />
      <main>
        <Hero onOrder={openModal} />
        <LifestyleSection />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <TargetAudience />
        <TrustStats />
        <ProductGallery />
        <ProductShowcase onOrder={openModal} />
        <FAQ />
        <FinalCTA onOrder={openModal} />
        <Footer />
      </main>
      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default App
