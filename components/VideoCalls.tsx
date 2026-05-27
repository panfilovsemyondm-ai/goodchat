"use client";
import { useEffect, useRef } from "react";

export default function VideoCalls() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right")
          .forEach(n => n.classList.add("visible"));
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="calls" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Visual */}
          <div className="flex-1 flex justify-center order-2 lg:order-1">
            <div className="reveal-left relative w-full max-w-[460px]">
              <div className="absolute inset-0 bg-sky-100 blur-3xl rounded-full opacity-50" />
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 aspect-video flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-3 p-5 w-full h-full">
                    {[
                      { name: "Анна М.", color: "from-violet-500 to-purple-600", speaking: true },
                      { name: "Игорь К.", color: "from-sky-500 to-cyan-600", speaking: false },
                      { name: "Сергей Р.", color: "from-emerald-500 to-teal-600", speaking: false },
                      { name: "Мария Т.", color: "from-rose-500 to-pink-600", speaking: false },
                    ].map(p => (
                      <div
                        key={p.name}
                        className={`rounded-2xl bg-gradient-to-br ${p.color} flex flex-col items-center justify-center gap-1.5 relative ${p.speaking ? "ring-2 ring-sky-400" : ""}`}
                      >
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                          {p.name[0]}
                        </div>
                        <span className="text-white text-[10px] font-semibold">{p.name}</span>
                        {p.speaking && (
                          <div className="absolute bottom-2 left-2 flex gap-0.5 items-end h-3">
                            {[3, 5, 7, 4, 6].map((h, i) => (
                              <div
                                key={i}
                                className="w-1 bg-sky-300 rounded-full"
                                style={{
                                  height: h * 2,
                                  animation: `blink ${0.8 + i * 0.1}s ease-in-out infinite`,
                                  animationDelay: `${i * 0.1}s`,
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3 bg-sky-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    HD · E2E
                  </div>
                </div>

                <div className="bg-slate-800 px-6 py-4 flex items-center justify-center gap-4">
                  {[
                    { path: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z", on: true },
                    { path: "M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", on: true },
                    { path: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0", on: false },
                  ].map((b, i) => (
                    <button
                      key={i}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${b.on ? "bg-white/10 hover:bg-white/20" : "bg-red-500/20 hover:bg-red-500/30"}`}
                    >
                      <svg className={`w-4 h-4 ${b.on ? "text-white" : "text-red-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={b.path} />
                      </svg>
                    </button>
                  ))}
                  <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors ml-2 cursor-pointer">
                    <svg className="w-4 h-4 text-white rotate-135" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="absolute -right-4 top-1/4 bg-white rounded-2xl shadow-lg p-3 border border-slate-100">
                <div className="text-xs font-bold text-slate-800">Зашифровано SS3</div>
                <div className="text-[10px] text-emerald-600 font-semibold">Голос + видео</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="reveal section-label">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Видеозвонки
            </div>
            <h2 className="reveal d-100 text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Видите друг друга.<br />
              <span className="text-sky-700">Больше — никто.</span>
            </h2>
            <p className="reveal d-200 text-lg text-slate-500 leading-relaxed mb-8">
              Видеоконференции GoodChat зашифрованы стандартом SS3 — голос,
              видео и демонстрация экрана. Никакой записи на серверах. Никакого
              доступа у третьих лиц.
            </p>

            <div className="space-y-4">
              {[
                { title: "До 200 участников", desc: "Групповые зашифрованные конференции с совместным экраном" },
                { title: "HD 1080p без задержек", desc: "Адаптивный кодек подстраивается под скорость соединения" },
                { title: "Без аккаунта для гостей", desc: "Пригласите ссылкой — собеседник зайдёт через браузер" },
                { title: "Виртуальный фон и размытие", desc: "Офис и конференц-зал остаются за кадром" },
              ].map((f, i) => (
                <div key={f.title} className={`reveal d-${(i + 1) * 100} flex items-start gap-3`}>
                  <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
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

        {/* Voice calls */}
        <div className="reveal mt-20 bg-sky-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="section-label">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Голосовые звонки
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
              Кристально чисто.<br />
              <span className="text-sky-700">Полностью защищено.</span>
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              ИИ-шумоподавление убирает фоновый шум. Звонки работают при скорости
              от 64 kbps. Шифрование SS3 распространяется на каждый голосовой пакет.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Шумоподавление ИИ", "SS3 шифрование", "Запись локально", "Голосовые сообщения"].map(t => (
                <span key={t} className="bg-white border border-sky-100 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 bg-white rounded-2xl shadow-sm p-6 border border-sky-100 min-w-[240px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 cta-gradient rounded-full flex items-center justify-center animate-pulse-ring">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Звонок активен</div>
                <div className="text-xs text-slate-400">02:47 · SS3 Зашифрован</div>
              </div>
            </div>
            <div className="flex items-end justify-center gap-1 h-12">
              {[4, 7, 5, 9, 6, 11, 8, 5, 10, 7, 4, 8, 6, 9, 5].map((h, i) => (
                <div
                  key={i}
                  className="w-2 bg-sky-500 rounded-full"
                  style={{
                    height: h * 4,
                    animation: `blink ${0.8 + (i % 3) * 0.2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.06}s`,
                  }}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-blink" />
              <span className="text-xs text-slate-500 font-medium">Защищено · GoodChat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
