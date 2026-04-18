const reviews = [
  {
    name: "Алексей В.",
    role: "Журналист-расследователь",
    avatar: "АВ",
    color: "from-blue-400 to-blue-600",
    stars: 5,
    text: "Работаю с источниками в чувствительных темах. Comnata — единственный мессенджер, которому я доверяю. Исчезающие сообщения и нулевые логи — это не маркетинг, это реальная архитектура.",
  },
  {
    name: "Мария С.",
    role: "Адвокат",
    avatar: "МС",
    color: "from-violet-400 to-purple-600",
    stars: 5,
    text: "Переписка с клиентами защищена адвокатской тайной. Comnata — первый мессенджер, который позволяет мне быть уверенной, что наш разговор не попадёт третьим лицам технически.",
  },
  {
    name: "Дмитрий К.",
    role: "Предприниматель",
    avatar: "ДК",
    color: "from-cyan-400 to-blue-500",
    stars: 5,
    text: "Веду переговоры с партнёрами из разных стран. Встроенный Tor и скрытый IP решают все вопросы с блокировками. Качество звонков лучше, чем у Zoom.",
  },
  {
    name: "Наталья П.",
    role: "HR-директор",
    avatar: "НП",
    color: "from-pink-400 to-rose-500",
    stars: 5,
    text: "Удивительно, что можно работать с командой анонимно, не зная реальных данных сотрудников. Это новый уровень доверия — люди раскрываются иначе.",
  },
  {
    name: "Игорь Т.",
    role: "Системный администратор",
    avatar: "ИТ",
    color: "from-green-400 to-emerald-600",
    stars: 5,
    text: "Проверил сетевой трафик — всё зашифровано. Open source клиент — аудировал код. Tor-режим работает стабильно. Рекомендую команде для рабочих коммуникаций.",
  },
  {
    name: "Светлана М.",
    role: "Блогер",
    avatar: "СМ",
    color: "from-orange-400 to-amber-500",
    stars: 5,
    text: "Наконец-то мессенджер, где я чувствую себя свободно. Никаких рекламных алгоритмов, никакого анализа переписки. Просто общение — каким оно и должно быть.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Отзывы
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Нам доверяют люди,<br />
            <span className="text-blue-600">для которых важна свобода</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Журналисты, юристы, предприниматели и все, кто ценит
            право на частную жизнь.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map(r => (
            <div key={r.name} className="card p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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

        {/* Trust stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { val: "4.9/5", label: "Средняя оценка" },
            { val: "500K+", label: "Пользователей" },
            { val: "98%", label: "Рекомендуют друзьям" },
            { val: "3 года", label: "На рынке" },
          ].map(s => (
            <div key={s.label} className="card p-5 text-center">
              <div className="text-2xl font-extrabold text-blue-600 mb-1">{s.val}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
