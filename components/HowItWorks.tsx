const steps = [
  {
    num: "01",
    title: "Скачайте приложение",
    desc: "Доступно в App Store, Google Play или как веб-версия. Установка занимает меньше минуты.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Зарегистрируйтесь за 30 секунд",
    desc: "Только номер телефона — никаких длинных форм. Подтвердите код и вы уже в GoodChat.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Пригласите контакты",
    desc: "GoodChat автоматически найдёт ваших друзей. Или поделитесь ссылкой-приглашением одним нажатием.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Общайтесь без ограничений",
    desc: "Сообщения, звонки, файлы, стикеры — всё уже доступно. Настройте уведомления под себя.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#0D0D22] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Как работает
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Начните за{" "}
            <span className="gradient-text">4 простых шага</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            От скачивания до первого сообщения — не более 3 минут.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-purple-500/40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0D0D22] border-2 border-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-purple-400 text-[10px] font-bold">{i + 1}</span>
                  </div>
                </div>
                <div className="text-white/20 text-5xl font-black mb-3 select-none">{step.num}</div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="gradient-bg text-white font-bold px-10 py-4 rounded-2xl text-base inline-block hover:opacity-90 transition-all hover:scale-105"
          >
            Попробовать прямо сейчас
          </a>
        </div>
      </div>
    </section>
  );
}
