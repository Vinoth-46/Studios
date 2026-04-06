import { motion } from 'framer-motion'

const projects = [
  {
    image: '/images/portfolio-restaurant.png',
    bgClass: 'rest-bg',
    tag: 'Restaurant',
    title: 'Spice Garden — Full Dining Experience Website'
  },
  {
    image: '/images/portfolio-gym.png',
    bgClass: 'gym-bg',
    tag: 'Fitness',
    title: 'Shaper Fitness Zone — Gym & Membership Website'
  },
  {
    image: '/images/portfolio-ecommerce.png',
    bgClass: 'eco-bg',
    tag: 'E-Commerce',
    title: 'StyleVault — Online Fashion Store'
  },
  {
    image: '/images/portfolio-corporate.png',
    bgClass: 'biz-bg',
    tag: 'Business',
    title: 'Nexus Consulting — Corporate & Services Website'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function Portfolio() {
  return (
    <section id="portfolio">
      <motion.div
        className="port-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <div className="label">Our Work</div>
          <h2 className="sec-title">Built with intention, launched with pride.</h2>
        </div>
        <a href="#contact" className="btn-primary">Start Your Project →</a>
      </motion.div>

      <div className="port-content">
        <div className="port-grid">
          {projects.map((proj, i) => (
            <motion.div
              className="port-card"
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className={`port-thumb ${proj.bgClass}`}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="port-image"
                />
              </div>
              <div className="port-info">
                <div className="port-tag">{proj.tag}</div>
                <h4>{proj.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Device slot — laptop sits alongside the portfolio grid */}
        <div className="device-slot device-slot-portfolio" data-section="portfolio" />
      </div>
    </section>
  )
}
