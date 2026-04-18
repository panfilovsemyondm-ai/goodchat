import { ArrowUpRight } from 'lucide-react'
import HLSVideo from './HLSVideo'
import BlurText from './BlurText'

const HLS_SRC = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'

export default function StartSection() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ minHeight: 500 }}>
      {/* HLS video background */}
      <HLSVideo
        src={HLS_SRC}
        className="absolute inset-0 w-full h-full object-cover"
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
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-32" style={{ minHeight: 500 }}>
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-white text-xs font-medium font-body">How It Works</span>
        </div>

        <BlurText
          text="You dream it. We ship it."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] justify-center max-w-2xl"
          delay={120}
        />

        <p className="mt-6 text-white/60 font-body font-light text-sm md:text-base max-w-md">
          Share your vision. Our AI handles the rest — wireframes, design, code, launch.
          All in days, not quarters.
        </p>

        <button className="mt-8 liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
          Get Started
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
