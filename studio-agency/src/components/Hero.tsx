import { motion } from 'motion/react'
import { ArrowUpRight, Play } from 'lucide-react'
import BlurText from './BlurText'

const PARTNERS = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma']

const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

export default function Hero() {
  return (
    <section className="relative overflow-visible" style={{ height: 1000 }}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute left-0 w-full h-auto object-contain z-0"
        style={{ top: '20%' }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/5 z-0" />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: 300,
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-20 flex flex-col items-center text-center px-6"
        style={{ paddingTop: 150 }}
      >
        {/* Badge */}
        <motion.div
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            New
          </span>
          <span className="text-white/80 text-sm font-body pr-2">
            Introducing AI-powered web design.
          </span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="The Website Your Brand Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px] justify-center"
          delay={100}
          direction="bottom"
        />

        {/* Subtext */}
        <motion.p
          className="mt-8 text-sm md:text-base text-white font-body font-light leading-tight max-w-md"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex items-center gap-4"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
            Get Started
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <button className="text-white font-body font-light text-sm flex items-center gap-2 hover:text-white/70 transition-colors">
            <Play className="h-4 w-4 fill-white" />
            Watch the Film
          </button>
        </motion.div>

        {/* Partners bar */}
        <motion.div
          className="mt-16 pt-16 flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="liquid-glass rounded-full px-4 py-2">
            <span className="text-white/60 text-xs font-body">
              Trusted by the teams behind
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {PARTNERS.map((p) => (
              <span
                key={p}
                className="text-2xl md:text-3xl font-heading italic text-white"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
