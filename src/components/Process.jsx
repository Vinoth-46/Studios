import { motion } from 'framer-motion'
import { Phone, Palette, Code2, Rocket } from 'lucide-react'

const steps = [
  { num: '01', icon: <Phone size={16} />, title: 'Discovery Call', desc: 'We listen to your vision, goals, and audience. No forms — just a real conversation about what you need.' },
  { num: '02', icon: <Palette size={16} />, title: 'Design & Prototype', desc: 'We create a visual prototype of your site before a single line of code is written — you approve, we build.' },
  { num: '03', icon: <Code2 size={16} />, title: 'Build & Refine', desc: 'We develop your website with your feedback at every stage. No surprises — ever.' },
  { num: '04', icon: <Rocket size={16} />, title: 'Launch & Support', desc: 'We go live together and stay with you post-launch for any updates, changes, or new features.' }
]

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' }
  })
}

export default function Process() {
  return (
    <section id="process">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="label">How We Work</div>
        <h2 className="sec-title">Simple, clear, and built around you.</h2>
      </motion.div>

      <div className="process-layout">
        <div className="process-steps">
          {steps.map((step, i) => (
            <motion.div
              className="p-step"
              key={step.num}
              custom={i}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="p-num">{step.num}</div>
              <div>
                <h4>{step.icon} {step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Device slot — laptop replaces the mockup visual here */}
        <div className="device-slot device-slot-process" data-section="process" />
      </div>
    </section>
  )
}
