export default function PhoneMockup() {
  const messages = [
    { text: "Привет! Ты в безопасности 🔒", side: "left", time: "14:22" },
    { text: "Да, никто нас не слышит 😌", side: "right", time: "14:22" },
    { text: "Отлично! Твой номер скрыт?", side: "left", time: "14:23" },
    { text: "Полностью. Только ник 👤", side: "right", time: "14:23" },
    { text: "Вот это называется приватность!", side: "left", time: "14:23" },
  ];

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full scale-75" />

      {/* Phone frame */}
      <div className="relative w-[280px] bg-slate-900 rounded-[44px] p-3 shadow-2xl shadow-blue-900/20">
        {/* Notch */}
        <div className="w-24 h-6 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-slate-700" />
        </div>

        {/* Screen */}
        <div className="bg-white rounded-[32px] overflow-hidden">
          {/* Header */}
          <div className="blue-gradient px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">АК</div>
            <div>
              <div className="text-white text-xs font-semibold">Алекс К.</div>
              <div className="text-blue-200 text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                онлайн
              </div>
            </div>
            <div className="ml-auto flex gap-2 text-white/80">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Encryption badge */}
          <div className="bg-blue-50 py-1.5 px-3 flex items-center justify-center gap-1.5">
            <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            <span className="text-[10px] text-blue-600 font-semibold">Сквозное шифрование активно</span>
          </div>

          {/* Messages */}
          <div className="bg-slate-50 px-3 py-4 space-y-2.5 min-h-[220px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.side === "right" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                  m.side === "right"
                    ? "blue-gradient text-white rounded-br-sm"
                    : "bg-white text-slate-700 shadow-sm rounded-bl-sm"
                }`}>
                  {m.text}
                  <div className={`text-[9px] mt-0.5 ${m.side === "right" ? "text-blue-200 text-right" : "text-slate-400"}`}>
                    {m.time}{m.side === "right" && <span className="ml-1">✓✓</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="bg-white border-t border-slate-100 px-3 py-2.5 flex items-center gap-2">
            <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-[11px] text-slate-400">Сообщение...</div>
            <div className="w-7 h-7 blue-gradient rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -right-6 top-16 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 border border-slate-100">
        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-800">Защищено</div>
          <div className="text-[9px] text-slate-400">256-bit AES</div>
        </div>
      </div>

      <div className="absolute -left-6 bottom-24 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 border border-slate-100">
        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-800">Аноним</div>
          <div className="text-[9px] text-slate-400">Без номера</div>
        </div>
      </div>
    </div>
  );
}
