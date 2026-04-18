const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    ),
    title: "Без номера телефона",
    desc: "Регистрация только по нику. Ваш реальный номер телефона никогда не запрашивается и не хранится на наших серверах.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: "E2E шифрование",
    desc: "Протокол Signal. Каждое сообщение шифруется на вашем устройстве — даже мы не можем его прочитать. Технически невозможно.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Нулевое хранение данных",
    desc: "Мы не собираем метаданные, не храним историю переписки на серверах и не передаём информацию третьим лицам.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
      </svg>
    ),
    title: "Встроенный VPN-режим",
    desc: "Маскировка трафика и IP-адреса прямо в приложении. Ваш провайдер не видит, что вы используете Comnata.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Самоудаляющиеся сообщения",
    desc: "Настройте таймер от 10 секунд до 1 недели. Сообщение исчезает у обоих собеседников без возможности восстановления.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
      </svg>
    ),
    title: "Защита от скриншотов",
    desc: "Система обнаружения и блокировки захвата экрана. Попытка скриншота — автоматическое уведомление собеседнику.",
  },
];

export default function Anonymity() {
  return (
    <section id="anon" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            Анонимность
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Приватность — это не функция.<br />
            <span className="text-blue-600">Это наш фундамент.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Большинство мессенджеров декларируют безопасность. Мы строим архитектуру так,
            чтобы физически не иметь доступа к вашим данным.
          </p>
        </div>

        {/* Big statement */}
        <div className="blue-gradient rounded-3xl p-8 md:p-12 mb-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-white/5 rounded-full translate-y-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">Наш принцип</div>
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                "Мы не можем передать то,<br className="hidden md:block" /> чего у нас нет"
              </h3>
              <p className="text-blue-100 text-base leading-relaxed max-w-lg">
                Comnata спроектирована по принципу zero-knowledge. Мы не храним ключи шифрования,
                историю переписки и личные данные. Запрос от властей? Нам нечего предоставить.
              </p>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-4">
              {[
                { num: "256", label: "бит AES" },
                { num: "0", label: "логов данных" },
                { num: "2", label: "слоя шифр." },
                { num: "∞", label: "приватность" },
              ].map(s => (
                <div key={s.label} className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl font-black">{s.num}</div>
                  <div className="text-blue-200 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map(p => (
            <div key={p.title} className="card p-6">
              <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                {p.icon}
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
