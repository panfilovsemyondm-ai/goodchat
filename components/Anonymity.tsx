"use client";
import { useEffect, useRef } from "react";

const pillars = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Шифрование SS3",
    desc: "Стандарт SS3 обеспечивает трёхуровневую защиту: шифрование на устройстве, в транзите и на сервере. Даже если один уровень будет скомпрометирован — данные останутся недоступными.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    title: "Децентрализованные серверы",
    desc: "Каждый чат автоматически распределяется между независимыми узлами в разных юрисдикциях. Нет единой точки отказа — нет единой точки уязвимости.",
    color: "bg-sky-50 text-sky-700",
  },
  {
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Zero-knowledge архитектура",
    desc: "Ключи шифрования генерируются и хранятся только на устройствах участников. GoodChat технически не может расшифровать вашу переписку — даже по запросу властей.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    title: "Метаданные не хранятся",
    desc: "Мы не фиксируем, кто, кому и когда писал. Без метаданных нет профилей, нет таргетинга, нет утечек при взломе нашей инфраструктуры.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Автоудаление сообщений",
    desc: "Настраивайте таймер от 10 секунд до 30 дней. Сообщения исчезают с обоих устройств — полностью, без возможности восстановления.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
    title: "Защита от скриншотов",
    desc: "Система блокировки захвата экрана на мобильных устройствах. При попытке скриншота — автоматическое уведомление второй стороне.",
    color: "bg-cyan-50 text-cyan-700",
  },
];

export default function Anonymity() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right, .reveal-scale")
          .forEach(n => n.classList.add("visible"));
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="security" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <div className="reveal section-label">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            Безопасность
          </div>
          <h2 className="reveal d-100 text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Приватность — не функция.<br />
            <span className="text-sky-700">Это архитектура.</span>
          </h2>
          <p className="reveal d-200 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Большинство мессенджеров декларируют безопасность. Мы строим систему так,
            чтобы физически не иметь доступа к вашим данным.
          </p>
        </div>

        {/* Hero security card */}
        <div className="reveal d-300 relative rounded-3xl overflow-hidden mb-10 shadow-sm">
          <div className="navy-gradient p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-1/3 w-52 h-52 bg-white/5 rounded-full translate-y-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-200 mb-4">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                  Принцип Zero-Knowledge
                </div>
                <h3 className="text-2xl md:text-3xl font-black leading-tight mb-4">
                  "Мы не можем передать то,<br className="hidden md:block" /> чего у нас нет"
                </h3>
                <p className="text-slate-300 text-base leading-relaxed max-w-lg">
                  GoodChat спроектирован так, что ключи шифрования существуют только на
                  устройствах участников чата. Мы не можем ни прочитать переписку,
                  ни предоставить её третьим лицам — это технически невозможно.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 flex-shrink-0">
                {[
                  { val: "SS3", label: "Стандарт" },
                  { val: "3x", label: "Уровня защиты" },
                  { val: "0", label: "Хранимых ключей" },
                  { val: "∞", label: "Узлов хранения" },
                ].map(s => (
                  <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black" style={{ fontFamily: "Poppins, sans-serif" }}>{s.val}</div>
                    <div className="text-slate-300 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal card p-6 d-${(i % 4 + 1) * 100}`}
            >
              <div className={`w-11 h-11 ${p.color} rounded-xl flex items-center justify-center mb-4 flex-shrink-0`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={p.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
