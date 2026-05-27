"use client";
import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Михаил Соколов",
    role: "CTO, FinTech компания",
    avatar: "МС",
    color: "from-sky-500 to-blue-600",
    text: "Перешли на GoodChat после утечки данных у конкурентов. SS3 шифрование и децентрализованные серверы — это не маркетинг, это реальная архитектура. IT-служба проверила, compliance одобрил.",
  },
  {
    name: "Анна Ветрова",
    role: "Управляющий партнёр, юридическое бюро",
    avatar: "АВ",
    color: "from-violet-500 to-purple-600",
    text: "Адвокатская тайна — это не просто этика, это закон. GoodChat — первый мессенджер, где я уверена технически: ключи только на устройствах, серверы не знают содержимого переписки.",
  },
  {
    name: "Дмитрий Калинин",
    role: "Главный редактор, издательский холдинг",
    avatar: "ДК",
    color: "from-emerald-500 to-teal-600",
    text: "Журналисты работают с чувствительными источниками. GoodChat позволяет вести защищённые каналы без компромиссов. Пробовали Signal — у GoodChat лучше групповые инструменты.",
  },
  {
    name: "Елена Морозова",
    role: "Директор по безопасности, производство",
    avatar: "ЕМ",
    color: "from-amber-500 to-orange-600",
    text: "Промышленный шпионаж — реальная угроза. Мы переработали архитектуру коммуникаций с нуля. Децентрализация GoodChat означает, что даже взлом одного узла не даёт доступ к корпусу данных.",
  },
  {
    name: "Сергей Новиков",
    role: "IT-директор, исследовательский институт",
    avatar: "СН",
    color: "from-cyan-500 to-sky-600",
    text: "Проверил сетевой трафик — весь зашифрован. Изучил архитектуру децентрализации — логика корректная. Документация подробная. Развернули on-premise за 3 часа, поддержка помогла с интеграцией.",
  },
  {
    name: "Ирина Захарова",
    role: "Compliance-офицер, банк",
    avatar: "ИЗ",
    color: "from-rose-500 to-pink-600",
    text: "Аудит безопасности встроен в тариф. Журнал событий выгружается в наш SIEM. GoodChat закрыл требования ЦБ по защите переписки и прошёл внутреннюю проверку службы безопасности.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll<HTMLElement>(".reveal, .reveal-scale")
          .forEach((n, i) => setTimeout(() => n.classList.add("visible"), i * 70));
        obs.disconnect();
      }
    }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="reviews" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="reveal section-label">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Отзывы
          </div>
          <h2 className="reveal d-100 text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Доверяют профессионалы,<br />
            <span className="text-sky-700">для которых важна защита</span>
          </h2>
          <p className="reveal d-200 text-lg text-slate-500 max-w-xl mx-auto">
            Юристы, журналисты, IT-директора и compliance-офицеры —
            те, кто проверяет всё досконально.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`reveal-scale card p-6 flex flex-col d-${(i % 3 + 1) * 100}`}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">"{r.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">{r.name}</div>
                  <div className="text-xs text-slate-400">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { val: "4.9/5", label: "Средняя оценка" },
            { val: "500+", label: "Корпоративных клиентов" },
            { val: "97%", label: "Продлевают подписку" },
            { val: "0", label: "Подтверждённых утечек" },
          ].map(s => (
            <div key={s.label} className="card p-5 text-center">
              <div className="text-2xl font-black text-sky-700 mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                {s.val}
              </div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
