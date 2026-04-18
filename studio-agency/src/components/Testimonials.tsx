import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import BlurText from './BlurText'

const TESTIMONIALS = [
  {
    quote:
      "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote:
      "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote:
      "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-white text-xs font-medium font-body">What They Say</span>
          </div>
          <BlurText
            text="Don't take our word for it."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] justify-center"
            delay={100}
          />
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="liquid-glass rounded-2xl p-8 flex flex-col gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="h-3.5 w-3.5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/80 font-body font-light text-sm italic leading-relaxed flex-1">
                "{t.quote}"
              </p>

              <div className="flex flex-col gap-0.5 pt-4 border-t border-white/10">
                <span className="text-white font-body font-medium text-sm">{t.name}</span>
                <span className="text-white/50 font-body font-light text-xs">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
