import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
})

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-text">
          <motion.div className="hero-badge" {...fadeUp(0)}>
            Web Design Studio — Est. 2025
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0.2, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            We craft <em>digital</em><br />experiences that<br />convert.
          </motion.h1>

          <p className="hero-description">
            Triova is a boutique web design studio founded by three friends — building stunning websites for restaurants, gyms, e-commerce stores, and businesses of every kind.
          </p>
 
          <motion.div className="hero-actions" {...fadeUp(0.24)}>
            <a href="#contact" className="btn-primary">
              Start Your Project <ArrowRight size={16} />
            </a>
            <a href="#portfolio" className="btn-ghost">
              See Our Work <ArrowDown size={16} />
            </a>
          </motion.div>
        </div>

        {/* Device slot — this is where the laptop appears in the hero */}

      </div>

      <motion.div className="hero-stats" {...fadeUp(0.65)}>
        <div>
          <div className="stat-num">3</div>
          <div className="stat-label">Expert Founders</div>
        </div>
        <div>
          <div className="stat-num">∞</div>
          <div className="stat-label">Creative Ideas</div>
        </div>
        <div>
          <div className="stat-num">1</div>
          <div className="stat-label">Shared Vision</div>
        </div>
      </motion.div>
    </section>
  )
}
