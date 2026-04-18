import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import BlurText from './BlurText'

const GIF_1 = 'https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif'
const GIF_2 = 'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif'

function Row({
  reverse,
  title,
  body,
  ctaLabel,
  gifSrc,
}: {
  reverse?: boolean
  title: string
  body: string
  ctaLabel: string
  gifSrc: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
    >
      {/* Text */}
      <motion.div
        className="flex-1 flex flex-col items-start gap-6"
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <BlurText
          text={title}
          className="text-3xl md:text-4xl font-heading italic text-white leading-[0.95] tracking-tight"
          delay={80}
        />
        <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed max-w-md">
          {body}
        </p>
        <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </motion.div>

      {/* GIF */}
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        <div className="liquid-glass rounded-2xl overflow-hidden aspect-video w-full relative">
          <img
            src={gifSrc}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
          {/* Cinematic placeholder shown if GIF fails to load */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white/5">
            <div className="w-16 h-16 rounded-full liquid-glass-strong flex items-center justify-center">
              <svg className="h-6 w-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-white/30 font-body text-xs">{title}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function FeaturesChess() {
  return (
    <section id="services" className="relative py-24 px-8 lg:px-16">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-white text-xs font-medium font-body">Capabilities</span>
        </div>
        <BlurText
          text="Pro features. Zero complexity."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] justify-center max-w-2xl"
          delay={100}
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        <Row
          title="Designed to convert. Built to perform."
          body="Every pixel is intentional. Our AI studies what works across thousands of top sites — then builds yours to outperform them all."
          ctaLabel="Learn more"
          gifSrc={GIF_1}
        />
        <Row
          reverse
          title="It gets smarter. Automatically."
          body="Your site evolves on its own. AI monitors every click, scroll, and conversion — then optimizes in real time. No manual updates. Ever."
          ctaLabel="See how it works"
          gifSrc={GIF_2}
        />
      </div>
    </section>
  )
}
