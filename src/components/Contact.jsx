import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact">
      <motion.div
        className="label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Ready to build something great together?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Tell us about your project and we'll get back to you within 24 hours. Always.
      </motion.p>

      <motion.div
        className="cta-actions"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a href="mailto:hello@triova.studio" className="btn-white">
          <Mail size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
          hello@triova.studio
        </a>
        <a href="https://wa.me/91XXXXXXXXXX" className="btn-outline">
          <MessageCircle size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
          WhatsApp Us
        </a>
      </motion.div>
    </section>
  )
}
