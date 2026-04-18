import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import HLSVideo from './HLSVideo'
import BlurText from './BlurText'

const HLS_SRC = 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'

const STATS = [
  { value: '200+', label: 'Sites launched' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3.2x', label: 'More conversions' },
  { value: '5 days', label: 'Average delivery' },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative overflow-hidden py-32">
      {/* HLS video background — desaturated */}
      <HLSVideo
        src={HLS_SRC}
        className="absolute inset-0 w-full h-full object-cover"
        desaturated
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: 'linear-gradient(to top, black, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-20 px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-white text-xs font-medium font-body">By the Numbers</span>
          </div>
          <BlurText
            text="Results that speak for themselves."
            className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-[0.9] justify-center max-w-xl"
            delay={100}
          />
        </div>

        <div ref={ref} className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                  {stat.value}
                </span>
                <span className="text-white/60 font-body font-light text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
