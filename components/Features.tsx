"use client";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3-3-3z",
    title: "Зашифрованные чаты",
    desc: "Личные и групповые чаты с SS3 шифрованием. История хранится только на устройствах участников.",
    span: "lg:col-span-2",
    highlight: true,
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Корпоративные группы",
    desc: "Создавайте рабочие пространства для команд. Роли, права доступа, модерация.",
    span: "",
    highlight: false,
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Файлы до 4 ГБ",
    desc: "Передача документов, архивов и медиа напрямую между участниками.",
    span: "",
    highlight: false,
  },
  {
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2",
    title: "Все платформы",
    desc: "iOS, Android, Windows, macOS, Linux, Web. Синхронизация зашифрована.",
    span: "",
    highlight: false,
  },
  {
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "API и интеграции",
    desc: "REST API, вебхуки, SSO. Встройте GoodChat в корпоративную экосистему.",
    span: "",
    highlight: false,
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Автоудаление",
    desc: "Таймер от 10 секунд до 30 дней. Без восстановления.",
    span: "",
    highlight: false,
  },
  {
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    title: "Умные уведомления",
    desc: "Расписание тишины, приоритеты и фильтры — только важное.",
    span: "",
    highlight: false,
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Аудит безопасности",
    desc: "Полный журнал событий для compliance-офицеров. Экспорт в SIEM.",
    span: "",
    highlight: false,
  },
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064",
    title: "Децентрализованные каналы",
    desc: "Каждая группа авт. распределяется по независимым серверам в разных юрисдикциях.",
    span: "lg:col-span-2",
    highlight: false,
  },
];

export default function Features() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll<HTMLElement>(".reveal, .reveal-scale")
          .forEach((n, i) => {
            setTimeout(() => n.classList.add("visible"), i * 50);
          });
        obs.disconnect();
      }
    }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="features" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="reveal section-label">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Функционал
          </div>
          <h2 className="reveal d-100 text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Всё что нужно команде.<br />
            <span className="text-sky-700">Ничего лишнего.</span>
          </h2>
          <p className="reveal d-200 text-lg text-slate-500 max-w-xl mx-auto">
            Полный набор инструментов корпоративной коммуникации — с защитой,
            которой нет у конкурентов.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal-scale card p-5 flex gap-4 ${f.span} ${
                f.highlight ? "navy-gradient border-transparent text-white" : ""
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                f.highlight ? "bg-white/20" : "bg-sky-50"
              }`}>
                <svg
                  className={`w-5 h-5 ${f.highlight ? "text-white" : "text-sky-700"}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={f.icon} />
                </svg>
              </div>
              <div>
                <h3 className={`font-bold text-sm mb-1 ${f.highlight ? "text-white" : "text-slate-900"}`}>
                  {f.title}
                </h3>
                <p className={`text-sm leading-relaxed ${f.highlight ? "text-slate-300" : "text-slate-500"}`}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
