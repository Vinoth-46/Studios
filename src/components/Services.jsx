import { motion } from 'framer-motion'
import { UtensilsCrossed, Dumbbell, ShoppingCart, Building2 } from 'lucide-react'

const services = [
  {
    num: '01',
    icon: <UtensilsCrossed size={24} />,
    title: 'Restaurant & Café Websites',
    desc: 'Mouth-watering designs with online menus, reservation systems, and the ambiance your brand deserves online.',
    image: '/images/svc-restaurant.webp'
  },
  {
    num: '02',
    icon: <Dumbbell size={24} />,
    title: 'Gym & Fitness Studios',
    desc: 'High-energy sites with class schedules, membership plans, and trainer profiles that inspire visitors to join.',
    image: '/images/svc-fitness.webp'
  },
  {
    num: '03',
    icon: <ShoppingCart size={24} />,
    title: 'E-Commerce Stores',
    desc: 'Fully functional online stores with seamless checkout, product showcases, and conversion-optimised flows.',
    image: '/images/svc-ecommerce.webp'
  },
  {
    num: '04',
    icon: <Building2 size={24} />,
    title: 'Business & Corporate Sites',
    desc: 'Professional websites for startups, agencies, and enterprises that build trust and drive real enquiries.',
    image: '/images/svc-corporate.webp'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function Services() {
  return (
    <section id="services">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <div className="label">What We Build</div>
          <h2 className="sec-title">Every business deserves a website worth remembering.</h2>
          <p className="sec-sub">From restaurants to retail, we design websites that look incredible and perform even better.</p>
        </div>
        {/* Device slot — laptop appears here in the services header */}

      </motion.div>

      <div className="services-grid">
        {services.map((svc, i) => (
          <motion.div
            className="svc-card"
            key={svc.num}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="svc-card-head">
              <div className="svc-icon">{svc.icon}</div>
              <span className="svc-num">{svc.num}</span>
            </div>
            <div className="svc-img-wrap">
              <img src={svc.image} alt={svc.title} className="svc-image" loading="lazy" />
            </div>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
