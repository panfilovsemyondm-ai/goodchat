"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Действительно ли сообщения зашифрованы?",
    a: "Да. GoodChat использует протокол Signal (E2E шифрование) для всех личных сообщений и звонков. Технически даже мы не можем прочитать вашу переписку. Ключи хранятся только на ваших устройствах.",
  },
  {
    q: "Что входит в бесплатный тариф?",
    a: "Бесплатный план включает безлимитные сообщения, голосовые и видеозвонки 1-на-1, группы до 200 человек, 5 ГБ облачного хранилища и поддержку всех платформ. Ограничений по времени нет — бесплатно навсегда.",
  },
  {
    q: "Можно ли перенести историю из Telegram/WhatsApp?",
    a: "Да, мы поддерживаем импорт истории из Telegram, WhatsApp и Viber. В настройках приложения выберите «Импорт чатов» и следуйте инструкции. Процесс занимает 5-10 минут.",
  },
  {
    q: "Как GoodChat работает при слабом интернете?",
    a: "Мы используем адаптивное сжатие данных и офлайн-очередь сообщений. При скорости от 56 kbps голосовые звонки работают стабильно. Сообщения отправятся автоматически, как только восстановится соединение.",
  },
  {
    q: "Есть ли API для интеграций?",
    a: "API доступен на тарифе Enterprise. Он позволяет создавать ботов, интеграции с CRM, вебхуки для уведомлений и кастомные клиенты. Документация доступна на developers.goodchat.app.",
  },
  {
    q: "Как отменить подписку?",
    a: "В любой момент без объяснений — в настройках аккаунта раздел «Подписка». Средства за остаток периода возвращаются на счёт. Данные сохраняются 90 дней после отмены.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0A0A1B] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Частые{" "}
            <span className="gradient-text">вопросы</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i ? "border-purple-500/40 bg-white/5" : "border-white/8 bg-white/3 hover:border-white/15"
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-semibold text-sm md:text-base">{faq.q}</span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${open === i ? "rotate-45 border-purple-400" : ""}`}>
                  <svg className={`w-3 h-3 ${open === i ? "text-purple-400" : "text-white/50"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
