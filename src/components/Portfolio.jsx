import { motion } from 'framer-motion'

const projects = [
  {
    image: '/images/portfolio-vinotreats.png',
    bgClass: 'treat-bg',
    tag: 'Food Delivery',
    title: 'VinoTreats — Custom Food Ordering & Restaurant Platform',
    link: 'https://full-stack-yldm.onrender.com'
  },
  {
    image: '/images/portfolio-kitchaa.png',
    bgClass: 'kitchaa-bg',
    tag: 'Civil Engineering',
    title: "KITCHAA'S ENTERPRISE — Civil Engineering & Consultancy",
    link: 'https://kitchaa-enterprise.netlify.app/'
  },
  {
    image: '/images/portfolio-massshoes.png',
    bgClass: 'mass-bg',
    tag: 'E-Commerce',
    title: 'Mass Shoes — Premium Athletic Footwear Experience',
    link: 'https://massshoes.netlify.app/'
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
            <motion.a
              href={proj.link || '#contact'}
              target={proj.link ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="port-card"
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
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
            </motion.a>
          ))}
        </div>

        {/* Device slot — laptop sits alongside the portfolio grid */}

      </div>
    </section>
  )
}
