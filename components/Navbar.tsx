"use client";
import { useState, useEffect } from "react";

const NAV = [
  { label: "О продукте", href: "#about" },
  { label: "Безопасность", href: "#security" },
  { label: "Функционал", href: "#features" },
  { label: "Цены", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 cta-gradient rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3-3-3z" />
            </svg>
          </div>
          <span className="font-bold text-lg text-slate-900 tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
            GoodChat
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(n => (
            <a
              key={n.href}
              href={n.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-700 hover:bg-sky-50 rounded-lg transition-all duration-150 cursor-pointer"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">
            Войти
          </a>
          <a href="#pricing" className="btn-primary text-sm px-5 py-2.5 cursor-pointer">
            Начать бесплатно
          </a>
        </div>

        {/* Burger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          onClick={() => setOpen(v => !v)}
          aria-label="Меню"
        >
          <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-1">
          {NAV.map(n => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-lg transition-all cursor-pointer"
            >
              {n.label}
            </a>
          ))}
          <a href="#pricing" className="btn-primary text-sm px-5 py-2.5 text-center mt-2 cursor-pointer">
            Начать бесплатно
          </a>
        </div>
      )}
    </header>
  );
}
