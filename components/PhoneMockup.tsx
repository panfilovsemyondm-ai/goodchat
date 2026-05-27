const messages = [
  { text: "Документы готовы к подписанию", side: "left", time: "10:41" },
  { text: "Отправляю зашифрованным каналом", side: "right", time: "10:41" },
  { text: "Получил. SS3 подтверждён 🔒", side: "left", time: "10:42" },
  { text: "Серверы распределены по 5 узлам", side: "right", time: "10:42" },
  { text: "Идеально для compliance", side: "left", time: "10:42" },
];

export default function PhoneMockup() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-sky-400/15 blur-3xl rounded-full scale-75" />

      <div className="relative w-[272px] bg-slate-900 rounded-[44px] p-3 shadow-2xl shadow-sky-900/20">
        <div className="w-20 h-6 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-slate-700" />
        </div>

        <div className="bg-white rounded-[32px] overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #0369A1 0%, #0C4A6E 100%)" }}>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">ЮО</div>
            <div>
              <div className="text-white text-xs font-semibold">Юридический отдел</div>
              <div className="text-sky-200 text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
                4 участника
              </div>
            </div>
            <div className="ml-auto flex gap-2 text-white/70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* SS3 badge */}
          <div className="bg-emerald-50 py-1.5 px-3 flex items-center justify-center gap-1.5">
            <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            <span className="text-[10px] text-emerald-700 font-semibold">SS3 · Децентрализовано · 5 узлов</span>
          </div>

          {/* Messages */}
          <div className="bg-slate-50 px-3 py-4 space-y-2.5 min-h-[200px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.side === "right" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[78%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed ${
                  m.side === "right"
                    ? "text-white rounded-br-sm"
                    : "bg-white text-slate-700 shadow-sm rounded-bl-sm"
                }`}
                  style={m.side === "right" ? { background: "linear-gradient(135deg, #0369A1 0%, #0C4A6E 100%)" } : {}}
                >
                  {m.text}
                  <div className={`text-[9px] mt-0.5 ${m.side === "right" ? "text-sky-200 text-right" : "text-slate-400"}`}>
                    {m.time}{m.side === "right" && <span className="ml-1">✓✓</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="bg-white border-t border-slate-100 px-3 py-2.5 flex items-center gap-2">
            <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-[11px] text-slate-400">Сообщение...</div>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #0369A1 0%, #0C4A6E 100%)" }}>
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -right-6 top-16 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 border border-slate-100">
        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-800">SS3 Active</div>
          <div className="text-[9px] text-emerald-600">Зашифровано</div>
        </div>
      </div>

      <div className="absolute -left-6 bottom-24 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 border border-slate-100">
        <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-800">5 серверов</div>
          <div className="text-[9px] text-sky-700">Децентрализовано</div>
        </div>
      </div>
    </div>
  );
}
