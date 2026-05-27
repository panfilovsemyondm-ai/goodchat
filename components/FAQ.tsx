"use client";
import { useState, useEffect, useRef } from "react";

const items = [
  {
    q: "Что такое шифрование SS3 и чем оно отличается от E2E?",
    a: "SS3 — трёхуровневый стандарт: данные шифруются на устройстве (слой 1), при передаче по сети (слой 2) и на сервере (слой 3). В отличие от классического E2E, SS3 гарантирует защиту даже при компрометации одного из уровней — ключи каждого уровня независимы.",
  },
  {
    q: "Как работает децентрализованное хранение?",
    a: "При создании группового чата GoodChat автоматически распределяет данные между независимыми узлами в разных юрисдикциях. Ни один узел не содержит полной копии — это исключает единую точку уязвимости и делает конфискацию серверов технически бесполезной.",
  },
  {
    q: "Может ли GoodChat передать мои данные властям?",
    a: "Нет. Мы применяем zero-knowledge архитектуру: ключи шифрования хранятся только на устройствах участников. Даже при судебном запросе мы можем предоставить только зашифрованные данные — без ключей они бесполезны.",
  },
  {
    q: "Подходит ли GoodChat для enterprise с требованиями compliance?",
    a: "Да. Тариф «Корпоративный» включает on-premise деплой, SSO (SAML/OIDC), журнал аудита для SIEM, SLA 99.99% и корпоративный договор. Мы прошли проверки по ISO 27001, GDPR и отраслевым регуляторам.",
  },
  {
    q: "Есть ли мобильные приложения и как работает синхронизация?",
    a: "GoodChat доступен на iOS, Android, Windows, macOS, Linux и в браузере. Синхронизация зашифрована — новое устройство верифицируется через QR-код или существующее устройство, без передачи ключей через сервер.",
  },
  {
    q: "Как начать — нужно ли устанавливать собственный сервер?",
    a: "Нет. Тарифы «Стартовый» и «Бизнес» работают через нашу облачную инфраструктуру — просто зарегистрируйтесь и пригласите команду. On-premise доступен в тарифе «Корпоративный» для организаций с особыми требованиями к размещению данных.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll<HTMLElement>(".reveal")
          .forEach((n, i) => setTimeout(() => n.classList.add("visible"), i * 60));
        obs.disconnect();
      }
    }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="reveal section-label justify-center">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Частые вопросы
          </div>
          <h2 className="reveal d-100 text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Отвечаем на главные<br />
            <span className="text-sky-700">вопросы о безопасности</span>
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`reveal card overflow-hidden d-${(i % 4 + 1) * 100}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-slate-800 text-sm leading-snug">{item.q}</span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  open === i ? "bg-sky-600 text-white rotate-45" : "bg-slate-100 text-slate-500"
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? 400 : 0 }}
              >
                <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
