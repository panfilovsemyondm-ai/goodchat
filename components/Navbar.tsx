"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-bg rounded-xl flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
          </div>
          <span className="text-white font-bold text-xl">GoodChat</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Возможности", "Как работает", "Цены", "FAQ"].map((item, i) => {
            const hrefs = ["#features", "#how", "#pricing", "#faq"];
            return (
              <a
                key={item}
                href={hrefs[i]}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
            Войти
          </a>
          <a
            href="#"
            className="gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Попробовать бесплатно
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {["Возможности", "Как работает", "Цены", "FAQ"].map((item, i) => {
            const hrefs = ["#features", "#how", "#pricing", "#faq"];
            return (
              <a
                key={item}
                href={hrefs[i]}
                className="text-white/80 hover:text-white text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            );
          })}
          <a href="#" className="gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-full text-center">
            Попробовать бесплатно
          </a>
        </div>
      )}
    </header>
  );
}
