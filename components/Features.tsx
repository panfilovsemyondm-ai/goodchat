const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Сквозное шифрование",
    desc: "Все сообщения, звонки и файлы защищены протоколом E2E. Только вы и ваш собеседник видите переписку — никакой третьей стороны.",
    color: "from-purple-500/20 to-purple-600/10",
    iconBg: "bg-purple-500/20 text-purple-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Видеозвонки в HD",
    desc: "Звонки 1080p с шумоподавлением на базе ИИ. Групповые конференции до 100 человек с виртуальным фоном и совместным экраном.",
    color: "from-blue-500/20 to-blue-600/10",
    iconBg: "bg-blue-500/20 text-blue-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Мгновенная доставка",
    desc: "Сообщения доходят за миллисекунды благодаря распределённой инфраструктуре с серверами в 30 странах мира.",
    color: "from-yellow-500/20 to-orange-500/10",
    iconBg: "bg-yellow-500/20 text-yellow-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Группы и каналы",
    desc: "Создавайте группы до 200 000 участников. Каналы для трансляции новостей, сообщества с тематическими обсуждениями.",
    color: "from-green-500/20 to-emerald-600/10",
    iconBg: "bg-green-500/20 text-green-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2M5 17v1a2 2 0 002 2h10a2 2 0 002-2v-1" />
      </svg>
    ),
    title: "Все устройства",
    desc: "iOS, Android, Windows, macOS, Linux, Web. Синхронизация истории в реальном времени — переключайтесь между устройствами без потерь.",
    color: "from-pink-500/20 to-rose-600/10",
    iconBg: "bg-pink-500/20 text-pink-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Голосовые сообщения",
    desc: "Запись голосовых сообщений с автотранскрипцией. Прослушивайте в 1.5x скорости или читайте текст — выбирайте сами.",
    color: "from-cyan-500/20 to-teal-600/10",
    iconBg: "bg-cyan-500/20 text-cyan-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0A0A1B] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Возможности
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Всё, что нужно для{" "}
            <span className="gradient-text">продуктивного общения</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            GoodChat объединяет лучшее из современных мессенджеров в одном приложении.
            Без компромиссов между безопасностью и удобством.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl bg-gradient-to-br ${f.color} border border-white/8 p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
