"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const steps = 60;
        const inc = to / steps;
        let cur = 0;
        const id = setInterval(() => {
          cur += inc;
          if (cur >= to) { setVal(to); clearInterval(id); }
          else setVal(Math.floor(cur));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{val.toLocaleString("ru-RU")}{suffix}</span>;
}

const NETWORK_NODES = [
  { cx: 480, cy: 110, label: "EU" },
  { cx: 660, cy: 200, label: "US" },
  { cx: 700, cy: 380, label: "AS" },
  { cx: 500, cy: 460, label: "ME" },
  { cx: 300, cy: 400, label: "AF" },
  { cx: 260, cy: 220, label: "RU" },
  { cx: 480, cy: 290, label: "HQ", isCenter: true },
];

const EDGES = [
  [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6],
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right")
          .forEach((n, i) => {
            setTimeout(() => n.classList.add("visible"), i * 80);
          });
        obs.disconnect();
      }
    }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen pt-20 pb-16 overflow-hidden bg-white flex items-center"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute top-[-120px] right-[-100px] w-[700px] h-[700px] rounded-full bg-sky-50 blur-[90px] opacity-70" />
        <div className="absolute bottom-[-80px] left-[-100px] w-[500px] h-[500px] rounded-full bg-sky-50 blur-[80px] opacity-50" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-emerald-50 blur-[70px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">

          {/* ── Text ── */}
          <div className="flex-1 text-center lg:text-left">
            <div className="reveal section-label section-label-green">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
              Шифрование SS3 · Децентрализация
            </div>

            <h1 className="reveal d-100 text-[2.75rem] md:text-[3.5rem] xl:text-[4.2rem] font-black text-slate-900 leading-[1.06] tracking-tight mb-6">
              Корпоративный<br />
              мессенджер,<br />
              <span className="text-sky-700">которому можно<br />доверять</span>
            </h1>

            <p className="reveal d-200 text-lg md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              GoodChat защищает переписку шифрованием&nbsp;SS3 и автоматически
              распределяет данные между независимыми децентрализованными серверами.
              Голос, видео, файлы — всё под защитой.
            </p>

            <div className="reveal d-300 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12">
              <a href="#pricing" className="btn-primary px-8 py-4 text-base cursor-pointer">
                Попробовать 14 дней бесплатно
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#security" className="btn-outline px-8 py-4 text-base cursor-pointer">
                Как работает защита
              </a>
            </div>

            {/* Stats */}
            <div className="reveal d-400 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                { val: 500, suffix: "+", label: "Клиентов" },
                { val: 128, suffix: "", label: "Стран" },
                { val: 0, suffix: "", label: "Утечек данных" },
                { val: 99, suffix: ".9%", label: "Uptime" },
              ].map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-sky-700" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <Counter to={s.val} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Network Visual ── */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="reveal-right d-200 relative">
              {/* Floating trust badges */}
              <div
                className="absolute -left-8 top-10 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100 z-10 animate-float"
                style={{ animationDelay: "0s" }}
              >
                <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">SS3 Encrypted</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">Активно</div>
                </div>
              </div>

              <div
                className="absolute -right-6 bottom-16 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100 z-10 animate-float2"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-9 h-9 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Децентрализовано</div>
                  <div className="text-[10px] text-sky-700 font-semibold">7 независимых узлов</div>
                </div>
              </div>

              {/* SVG Network */}
              <div className="w-[340px] md:w-[420px] xl:w-[480px]">
                <svg
                  viewBox="0 0 960 580"
                  className="w-full h-auto drop-shadow-sm"
                  aria-hidden
                >
                  {/* Background circle */}
                  <circle cx="480" cy="290" r="260" fill="#F0F9FF" opacity="0.6" />
                  <circle cx="480" cy="290" r="220" fill="#E0F2FE" opacity="0.4" />

                  {/* Animated outer ring */}
                  <circle cx="480" cy="290" r="250" fill="none" stroke="#BAE6FD" strokeWidth="1"
                    strokeDasharray="8 6" className="animate-spin-slow" style={{ transformOrigin: "480px 290px" }} />

                  {/* Edges */}
                  {EDGES.map(([a, b], i) => {
                    const na = NETWORK_NODES[a], nb = NETWORK_NODES[b];
                    const isCenterEdge = na.isCenter || nb.isCenter;
                    return (
                      <line
                        key={i}
                        x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
                        stroke={isCenterEdge ? "#0369A1" : "#BAE6FD"}
                        strokeWidth={isCenterEdge ? 2 : 1.5}
                        strokeDasharray={isCenterEdge ? "6 3" : "0"}
                        opacity={isCenterEdge ? 0.7 : 0.5}
                        className={isCenterEdge ? "animate-dash-flow" : ""}
                      />
                    );
                  })}

                  {/* Nodes */}
                  {NETWORK_NODES.map(n => (
                    <g key={n.label} transform={`translate(${n.cx}, ${n.cy})`}>
                      {n.isCenter ? (
                        <>
                          <circle r="38" fill="#0369A1" opacity="0.12" />
                          <circle r="28" fill="#0369A1" opacity="0.2" />
                          <circle r="20" fill="#0369A1" />
                          <text y="1" textAnchor="middle" dominantBaseline="middle"
                            fill="white" fontSize="9" fontWeight="700" fontFamily="Poppins">GC</text>
                          <text y="36" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="600" fontFamily="Open Sans">
                            GoodChat
                          </text>
                        </>
                      ) : (
                        <>
                          <circle r="18" fill="white" stroke="#BAE6FD" strokeWidth="2" />
                          <circle r="12" fill="#E0F2FE" />
                          <text y="1" textAnchor="middle" dominantBaseline="middle"
                            fill="#0369A1" fontSize="9" fontWeight="700" fontFamily="Poppins">{n.label}</text>
                          <circle r="5" fill="#059669" cy="14" opacity="0.9">
                            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
                          </circle>
                        </>
                      )}
                    </g>
                  ))}

                  {/* Lock icon in center-bottom area */}
                  <g transform="translate(480, 490)">
                    <rect x="-32" y="-18" width="64" height="36" rx="10" fill="white" stroke="#E0F2FE" strokeWidth="1.5" />
                    <text y="1" textAnchor="middle" dominantBaseline="middle"
                      fill="#059669" fontSize="10" fontWeight="600" fontFamily="Open Sans">SS3 Encrypted</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="reveal d-500 mt-16 pt-10 border-t border-slate-100">
          <p className="text-center text-sm text-slate-400 mb-6 font-medium">Нам доверяют организации в разных отраслях</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {[
              "Юридические бюро",
              "Исследовательские лаборатории",
              "Промышленные предприятия",
              "Редакции СМИ",
              "Финансовые организации",
              "НКО и правозащитники",
            ].map(c => (
              <span key={c} className="text-sm font-semibold text-slate-400 hover:text-sky-700 transition-colors cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
