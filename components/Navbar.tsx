"use client";
import { useState, useEffect } from "react";

const NAV = [
  { label: "О мессенджере", href: "#about" },
  { label: "Анонимность", href: "#anon" },
  { label: "Звонки", href: "#calls" },
  { label: "Функционал", href: "#features" },
  { label: "Цены", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 blue-gradient rounded-xl flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
            </svg>
          </div>
          <span className="font-bold text-lg text-slate-900 tracking-tight">Comnata</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(n => (
            <a key={n.href} href={n.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
              {n.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Войти</a>
          <a href="#" className="btn-primary text-sm px-5 py-2.5">Попробовать бесплатно</a>
        </div>

        {/* Burger */}
        <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-1">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
              {n.label}
            </a>
          ))}
          <a href="#" className="btn-primary text-sm px-5 py-2.5 text-center mt-2">Попробовать бесплатно</a>
        </div>
      )}
    </header>
  );
}
