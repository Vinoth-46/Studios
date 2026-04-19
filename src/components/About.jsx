import { motion } from 'framer-motion'

const team = [
  {
    initial: 'P',
    name: 'Praveen joshwa .B',
    role: 'Strategy Lead',
    color: '#993C1D',
    desc: 'Bridges client goals with creative solutions. Makes sure every website doesn\'t just look great — it performs.',
    linkedin: 'https://www.linkedin.com/in/bpj45/'
  },
  {
    initial: 'T',
    name: 'Tamilarasu .V',
    role: 'Development Lead',
    color: '#0F6E56',
    desc: 'Turns designs into fast, flawless websites. Ensures every pixel is perfect and every interaction is buttery smooth.',
    linkedin: 'https://www.linkedin.com/in/tamilarasu55/'
  },
  {
    initial: 'V',
    name: 'Vinoth .M',
    role: 'Design Lead',
    color: '#1B4FD8',
    desc: 'Crafts the visual identity and user experience for every project. Obsessed with the details that make people stop and stare.',
    linkedin: 'https://www.linkedin.com/in/vinoth465/'
  }
]


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function About() {
  return (
    <section id="about">
      <motion.div
        className="about-top"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <div className="label">About Triova</div>
          <h2 className="sec-title">Three friends who turned passion into craft.</h2>
        </div>
        <p className="about-sub">We started Triova because we believed every local business — from the neighbourhood restaurant to the city gym — deserves a world-class digital presence. No templates. No shortcuts. Just original work, every time.</p>
      </motion.div>

      <div className="team-grid">
        {team.map((member, i) => (
          <motion.div
            className="team-card"
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="t-avatar" style={{ background: member.color }}>{member.initial}</div>
            <h4>{member.name}</h4>
            <div className="role">{member.role}</div>
            <p>{member.desc}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="t-linkedin" aria-label={`${member.name} LinkedIn`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
