import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParallaxDevice from './components/ParallaxDevice'

export default function App() {
  return (
    <>
      <Navbar />
      <ParallaxDevice />
      <Hero />
      <Ticker />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
