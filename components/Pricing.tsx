"use client";
import { useState, useEffect, useRef } from "react";

const plans = [
  {
    name: "Стартовый",
    desc: "До 50 пользователей",
    priceMonthly: 499,
    priceYearly: 349,
    unit: "пользователь/мес",
    highlight: false,
    badge: null,
    features: [
      "SS3 шифрование",
      "Децентрализованные каналы",
      "Личные и групповые чаты",
      "Голосовые и видеозвонки",
      "Файлы до 1 ГБ",
      "Все платформы",
      "Автоудаление сообщений",
      "Базовая поддержка",
    ],
    missing: ["API и интеграции", "SSO авторизация", "Выделенный менеджер", "Аудит безопасности"],
    cta: "Начать бесплатно",
    ctaStyle: "btn-outline",
  },
  {
    name: "Бизнес",
    desc: "До 500 пользователей",
    priceMonthly: 399,
    priceYearly: 279,
    unit: "пользователь/мес",
    highlight: true,
    badge: "Популярный",
    features: [
      "Всё из «Стартового»",
      "API и вебхуки",
      "SSO авторизация (SAML/OIDC)",
      "Файлы до 4 ГБ",
      "Видеозвонки до 200 участников",
      "Аудит безопасности",
      "Защита от скриншотов",
      "Приоритетная поддержка 24/7",
    ],
    missing: ["Выделенный менеджер"],
    cta: "Попробовать 14 дней бесплатно",
    ctaStyle: "btn-primary",
  },
  {
    name: "Корпоративный",
    desc: "От 500 пользователей",
    priceMonthly: null,
    priceYearly: null,
    unit: "индивидуально",
    highlight: false,
    badge: null,
    features: [
      "Всё из «Бизнеса»",
      "On-premise деплой",
      "Выделенный менеджер",
      "SLA 99.99%",
      "Кастомные интеграции",
      "Обучение команды",
      "Аудит кода безопасности",
      "Корпоративный договор",
    ],
    missing: [],
    cta: "Связаться с нами",
    ctaStyle: "btn-outline",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll<HTMLElement>(".reveal, .reveal-scale")
          .forEach((n, i) => setTimeout(() => n.classList.add("visible"), i * 80));
        obs.disconnect();
      }
    }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="pricing" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="reveal section-label">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Цены
          </div>
          <h2 className="reveal d-100 text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Честные цены.<br />
            <span className="text-sky-700">Без скрытых условий.</span>
          </h2>
          <p className="reveal d-200 text-lg text-slate-500 max-w-xl mx-auto mb-8">
            Подписка привязана к количеству пользователей. Платите только за то,
            что используете. Отмена в любой момент.
          </p>

          <div className="reveal d-300 inline-flex items-center bg-slate-50 border border-slate-200 rounded-xl p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                !yearly ? "bg-white text-slate-900 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Ежемесячно
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                yearly ? "bg-white text-slate-900 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Ежегодно
              <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-md">−30%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal-scale relative flex flex-col rounded-2xl p-7 transition-all d-${(i + 1) * 100} ${
                plan.highlight
                  ? "navy-gradient text-white shadow-2xl shadow-slate-900/20 scale-[1.02]"
                  : "bg-white border border-slate-200 hover:border-sky-200 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div className="mb-5">
                <h3 className={`font-black text-xl mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}>{plan.desc}</p>
              </div>

              <div className="mb-6">
                {plan.priceMonthly === null ? (
                  <div>
                    <div className={`text-3xl font-black ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                      По запросу
                    </div>
                    <div className={`text-sm mt-0.5 ${plan.highlight ? "text-slate-400" : "text-slate-400"}`}>
                      Индивидуальные условия
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={`text-3xl font-black ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                      {yearly ? plan.priceYearly : plan.priceMonthly} ₽
                      <span className={`text-base font-normal ml-1 ${plan.highlight ? "text-slate-400" : "text-slate-400"}`}>
                        /{plan.unit}
                      </span>
                    </div>
                    {yearly && (
                      <div className={`text-sm mt-0.5 line-through ${plan.highlight ? "text-slate-500" : "text-slate-400"}`}>
                        {plan.priceMonthly} ₽/{plan.unit}
                      </div>
                    )}
                  </>
                )}
              </div>

              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-sky-300" : "text-sky-600"}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlight ? "text-slate-200" : "text-slate-700"}>{f}</span>
                  </li>
                ))}
                {plan.missing.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-slate-600" : "text-slate-300"}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className={plan.highlight ? "text-slate-600" : "text-slate-300"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`${plan.ctaStyle} w-full py-3.5 text-sm text-center cursor-pointer ${
                  plan.highlight ? "bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-semibold transition-colors" : ""
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Все тарифы включают SS3 шифрование и децентрализованное хранение.
          Минимальная оплата — от 5 пользователей.
        </p>
      </div>
    </section>
  );
}
