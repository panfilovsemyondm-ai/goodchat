"use client";
import { useState } from "react";

const plans = [
  {
    name: "Бесплатно",
    priceMonthly: 0,
    priceYearly: 0,
    desc: "Для личного использования",
    color: "border-white/10",
    badge: null,
    features: [
      "Безлимитные сообщения",
      "Голосовые и видеозвонки",
      "Группы до 200 участников",
      "Хранилище 5 ГБ",
      "Все платформы",
    ],
    missing: ["Групповые звонки до 10 чел", "Приоритетная поддержка", "API доступ"],
    cta: "Начать бесплатно",
    ctaStyle: "glass text-white hover:bg-white/15",
  },
  {
    name: "Pro",
    priceMonthly: 299,
    priceYearly: 199,
    desc: "Для команд и бизнеса",
    color: "border-purple-500/60",
    badge: "Популярный",
    features: [
      "Всё из Бесплатного",
      "Групповые звонки до 100 чел",
      "Группы до 50 000 участников",
      "Хранилище 100 ГБ",
      "Совместный экран",
      "Приоритетная поддержка 24/7",
      "Кастомные темы и стикеры",
    ],
    missing: ["API доступ"],
    cta: "Попробовать 14 дней бесплатно",
    ctaStyle: "gradient-bg text-white hover:opacity-90",
  },
  {
    name: "Enterprise",
    priceMonthly: 999,
    priceYearly: 749,
    desc: "Для крупных организаций",
    color: "border-blue-500/40",
    badge: null,
    features: [
      "Всё из Pro",
      "Неограниченные хранилище",
      "Групповые звонки до 1000 чел",
      "API и вебхуки",
      "SSO и LDAP",
      "Выделенный менеджер",
      "On-premise деплой",
      "SLA 99.99%",
    ],
    missing: [],
    cta: "Связаться с нами",
    ctaStyle: "glass text-white hover:bg-white/15",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="bg-[#0D0D22] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Цены
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Прозрачные тарифы,{" "}
            <span className="gradient-text">никаких сюрпризов</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            Начните бесплатно. Переходите на платный план только когда нужно.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !yearly ? "gradient-bg text-white" : "text-white/50 hover:text-white"
              }`}
            >
              Ежемесячно
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                yearly ? "gradient-bg text-white" : "text-white/50 hover:text-white"
              }`}
            >
              Ежегодно
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">−33%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-gradient-to-b from-white/5 to-transparent p-7 flex flex-col transition-all hover:-translate-y-1 duration-300 ${plan.color} ${
                plan.badge ? "shadow-xl shadow-purple-500/20" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="gradient-bg text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-white/40 text-sm">{plan.desc}</p>
              </div>

              <div className="mb-7">
                {plan.priceMonthly === 0 ? (
                  <div className="text-white">
                    <span className="text-5xl font-black">0 ₽</span>
                    <span className="text-white/40 text-sm ml-2">навсегда</span>
                  </div>
                ) : (
                  <div className="text-white">
                    <span className="text-5xl font-black">
                      {yearly ? plan.priceYearly : plan.priceMonthly} ₽
                    </span>
                    <span className="text-white/40 text-sm ml-2">/ мес</span>
                    {yearly && (
                      <div className="text-white/40 text-xs mt-1 line-through">{plan.priceMonthly} ₽ / мес</div>
                    )}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/25">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full py-3.5 rounded-xl text-sm font-bold text-center transition-all ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
