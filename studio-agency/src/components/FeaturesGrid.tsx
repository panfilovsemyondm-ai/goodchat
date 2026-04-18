import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Zap, Palette, BarChart3, Shield } from 'lucide-react'
import BlurText from './BlurText'

const CARDS = [
  {
    icon: Zap,
    title: 'Days, Not Months',
    body: 'Concept to launch at a pace that redefines fast. Because waiting isn\'t a strategy.',
  },
  {
    icon: Palette,
    title: 'Obsessively Crafted',
    body: 'Every detail considered. Every element refined. Design so precise, it feels inevitable.',
  },
  {
    icon: BarChart3,
    title: 'Built to Convert',
    body: 'Layouts informed by data. Decisions backed by performance. Results you can measure.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    body: 'Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.',
  },
]

export default function FeaturesGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="work" className="relative py-24 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-white text-xs font-medium font-body">Why Us</span>
          </div>
          <BlurText
            text="The difference is everything."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] justify-center"
            delay={100}
          />
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                className="liquid-glass rounded-2xl p-6 flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-heading italic text-white text-xl leading-tight">
                  {card.title}
                </h3>
                <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
