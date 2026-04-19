import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Services from './components/Services'

const Process = lazy(() => import('./components/Process'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Pricing = lazy(() => import('./components/Pricing'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Suspense fallback={null}>
        <Process />
        <Portfolio />
        <Pricing />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}


