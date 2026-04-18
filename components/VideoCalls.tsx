export default function VideoCalls() {
  return (
    <section id="calls" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Visual */}
          <div className="flex-1 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[460px]">
              {/* Glow */}
              <div className="absolute inset-0 bg-blue-100 blur-3xl rounded-full opacity-60" />

              {/* Main card */}
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                {/* Video area */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 aspect-video flex items-center justify-center">
                  {/* Participant tiles */}
                  <div className="grid grid-cols-2 gap-3 p-6 w-full h-full">
                    {[
                      { name: "Анна М.", color: "from-purple-400 to-pink-500", speaking: true },
                      { name: "Игорь К.", color: "from-blue-400 to-cyan-500", speaking: false },
                    ].map(p => (
                      <div key={p.name} className={`rounded-2xl bg-gradient-to-br ${p.color} flex flex-col items-center justify-center gap-2 relative ${p.speaking ? "ring-2 ring-blue-400" : ""}`}>
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                          {p.name[0]}
                        </div>
                        <span className="text-white text-xs font-semibold">{p.name}</span>
                        {p.speaking && (
                          <div className="absolute bottom-2 left-2 flex gap-0.5 items-end h-4">
                            {[3, 5, 7, 4, 6].map((h, i) => (
                              <div key={i} className="w-1 bg-blue-400 rounded-full animate-pulse" style={{ height: h * 2, animationDelay: `${i * 0.1}s` }} />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* HD badge */}
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    HD 1080p
                  </div>

                  {/* Self view */}
                  <div className="absolute bottom-4 right-4 w-16 h-20 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-white/20 flex items-center justify-center">
                    <div className="text-white/60 text-xs">Вы</div>
                  </div>
                </div>

                {/* Controls */}
                <div className="bg-slate-800 px-6 py-4 flex items-center justify-center gap-4">
                  {[
                    { icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z", active: true },
                    { icon: "M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", active: true },
                    { icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0", active: false },
                  ].map((btn, i) => (
                    <button key={i} className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${btn.active ? "bg-white/10 hover:bg-white/20" : "bg-red-500/20 hover:bg-red-500/30"}`}>
                      <svg className={`w-4 h-4 ${btn.active ? "text-white" : "text-red-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={btn.icon}/>
                      </svg>
                    </button>
                  ))}
                  <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors ml-4">
                    <svg className="w-4 h-4 text-white rotate-135" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Floating info */}
              <div className="absolute -right-4 top-1/4 bg-white rounded-2xl shadow-lg p-3 border border-slate-100">
                <div className="text-xs font-bold text-slate-800">Зашифрован</div>
                <div className="text-[10px] text-slate-400">Голос + видео</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="section-label">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              Видеозвонки
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Видите друг друга.<br />
              <span className="text-blue-600">Больше — никто.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Видеозвонки в Comnata зашифрованы end-to-end — голос, видео и
              совместный экран. Никакой записи на серверах. Никакого доступа
              у третьих лиц. Даже у нас.
            </p>

            <div className="space-y-4">
              {[
                { title: "HD 1080p без задержек", desc: "Адаптивный кодек подстраивается под скорость вашего интернета" },
                { title: "До 50 участников", desc: "Групповые зашифрованные конференции с совместным экраном" },
                { title: "Виртуальный фон", desc: "Размытие и кастомный фон — офис остаётся за кадром" },
                { title: "Без аккаунта у собеседника", desc: "Пригласите ссылкой — собеседник зайдёт через браузер" },
              ].map(f => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 text-sm">{f.title}</span>
                    <span className="text-slate-500 text-sm"> — {f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Voice calls sub-section */}
        <div className="mt-20 bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="section-label">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Голосовые звонки
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              Кристально чисто.<br />
              <span className="text-blue-600">Полностью анонимно.</span>
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              ИИ-шумоподавление убирает фоновый шум. Звонки работают
              при скорости от 64 kbps. Ваш IP-адрес скрыт — собеседник
              не узнает, откуда вы звоните.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Шумоподавление ИИ", "Скрытый IP", "Запись звонков локально", "Голосовые сообщения"].map(t => (
                <span key={t} className="bg-white border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Visual waveform */}
          <div className="flex-shrink-0 bg-white rounded-2xl shadow-sm p-6 border border-blue-100 min-w-[240px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 blue-gradient rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Звонок активен</div>
                <div className="text-xs text-slate-400">02:47 • Зашифрован</div>
              </div>
            </div>
            <div className="flex items-end justify-center gap-1 h-12">
              {[4,7,5,9,6,11,8,5,10,7,4,8,6,9,5].map((h, i) => (
                <div key={i}
                  className="w-2 bg-blue-500 rounded-full animate-pulse"
                  style={{ height: h * 4, animationDelay: `${i * 0.08}s` }}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-500 font-medium">IP скрыт • Анонимно</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
