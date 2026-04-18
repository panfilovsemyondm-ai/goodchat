"use client";
import { useState } from "react";

const plans = [
  {
    name: "Анонимус",
    monthlyPrice: 0,
    yearlyPrice: 0,
    desc: "Для личного использования",
    highlight: false,
    features: [
      "Анонимная регистрация",
      "E2E шифрование",
      "Личные и групповые чаты",
      "Голосовые и видеозвонки 1-на-1",
      "Самоудаляющиеся сообщения",
      "Файлы до 512 МБ",
      "Все платформы",
    ],
    missing: ["Групповые звонки", "Tor-режим", "Приоритетная поддержка", "API доступ"],
    cta: "Начать бесплатно",
    ctaClass: "btn-outline w-full py-3.5 text-sm",
  },
  {
    name: "Приватный",
    monthlyPrice: 349,
    yearlyPrice: 249,
    desc: "Максимальная анонимность",
    highlight: true,
    badge: "Популярный",
    features: [
      "Всё из «Анонимус»",
      "Tor-маршрутизация",
      "Встроенный VPN-режим",
      "Групповые звонки до 25 человек",
      "Файлы до 4 ГБ",
      "Защита от скриншотов",
      "Режим инкогнито",
      "Приоритетная поддержка",
    ],
    missing: ["API доступ"],
    cta: "Попробовать 14 дней бесплатно",
    ctaClass: "btn-primary w-full py-3.5 text-sm",
  },
  {
    name: "Корпоративный",
    monthlyPrice: 1490,
    yearlyPrice: 990,
    desc: "Для команд и организаций",
    highlight: false,
    features: [
      "Всё из «Приватного»",
      "Групповые звонки до 200 человек",
      "On-premise деплой",
      "API и вебхуки",
      "SSO авторизация",
      "Выделенный менеджер",
      "SLA 99.99%",
      "Аудит безопасности",
    ],
    missing: [],
    cta: "Связаться с нами",
    ctaClass: "btn-outline w-full py-3.5 text-sm",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-label">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Прайс-лист
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Честные цены.<br />
            <span className="text-blue-600">Без скрытых условий.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-8">
            Мы не продаём ваши данные рекламодателям. Наш доход —
            только подписки.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${!yearly ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
            >
              Ежемесячно
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
            >
              Ежегодно
              <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${yearly ? "bg-white/20 text-white" : "bg-green-100 text-green-700"}`}>−29%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-all ${
                plan.highlight
                  ? "blue-gradient text-white shadow-2xl shadow-blue-200 scale-[1.02]"
                  : "bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow">
                  {plan.badge}
                </div>
              )}

              <div className="mb-5">
                <h3 className={`font-extrabold text-xl mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? "text-blue-100" : "text-slate-500"}`}>{plan.desc}</p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice === 0 ? (
                  <div className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    Бесплатно
                  </div>
                ) : (
                  <>
                    <div className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                      {yearly ? plan.yearlyPrice : plan.monthlyPrice} ₽
                      <span className={`text-base font-normal ml-1 ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>/мес</span>
                    </div>
                    {yearly && (
                      <div className={`text-sm mt-0.5 line-through ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>
                        {plan.monthlyPrice} ₽/мес
                      </div>
                    )}
                  </>
                )}
              </div>

              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-blue-200" : "text-blue-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className={plan.highlight ? "text-blue-50" : "text-slate-700"}>{f}</span>
                  </li>
                ))}
                {plan.missing.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-blue-300/50" : "text-slate-300"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <span className={plan.highlight ? "text-blue-200/50" : "text-slate-300"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className={plan.ctaClass}>{plan.cta}</a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Все тарифы включают анонимную регистрацию и E2E шифрование.
          Отмена в любой момент без штрафов.
        </p>
      </div>
    </section>
  );
}
