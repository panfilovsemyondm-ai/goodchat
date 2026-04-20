import { ArrowUpRight } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const NAV_LINKS = ['Home', 'Services', 'Work', 'Process', 'Pricing']

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16">
      <div className="flex items-center justify-between py-3">
        {/* Logo */}
        <div className="h-12 w-12 flex items-center justify-center">
          <img src={logoIcon} alt="Studio" className="h-12 w-12 object-contain" />
        </div>

        {/* Center nav — desktop only */}
        <nav className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 gap-0.5">
          {NAV_LINKS.map((link) =>
            link === 'Pricing' ? (
              <a
                key={link}
                href="#pricing"
                className="bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body flex items-center gap-1 hover:bg-white/90 transition-colors"
              >
                Get Started
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white rounded-full hover:bg-white/10 transition-all"
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <a
            href="#pricing"
            className="liquid-glass-strong rounded-full px-4 py-2 text-sm font-medium text-white font-body flex items-center gap-1"
          >
            Get Started
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
