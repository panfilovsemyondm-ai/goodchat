import { ArrowUpRight } from 'lucide-react'
import HLSVideo from './HLSVideo'
import BlurText from './BlurText'

const HLS_SRC = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

const FOOTER_LINKS = ['Privacy', 'Terms', 'Contact']

export default function CtaFooter() {
  return (
    <section id="pricing" className="relative overflow-hidden">
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
      <div className="relative z-20 flex flex-col items-center text-center px-8 lg:px-16 pt-40 pb-16">
        {/* CTA */}
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-8">
          <span className="text-white text-xs font-medium font-body">Get Started Today</span>
        </div>

        <BlurText
          text="Your next website starts here."
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] justify-center max-w-3xl"
          delay={100}
        />

        <p className="mt-8 text-white/60 font-body font-light text-sm md:text-base max-w-md leading-relaxed">
          Book a free strategy call. See what AI-powered design can do.
          No commitment, no pressure. Just possibilities.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
            Book a Call
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 font-body font-medium text-sm hover:bg-white/90 transition-colors">
            View Pricing
          </button>
        </div>

        {/* Footer bar */}
        <div className="mt-32 pt-8 border-t border-white/10 w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-xs font-body">
            © 2026 Studio. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 text-xs font-body hover:text-white/70 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
