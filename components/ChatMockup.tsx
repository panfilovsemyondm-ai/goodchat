export default function ChatMockup() {
  const messages = [
    { text: "Привет! Ты уже скачал GoodChat? 😊", side: "left", time: "10:41" },
    { text: "Да! Качество звонков просто огонь 🔥", side: "right", time: "10:41" },
    { text: "Сквозное шифрование — мне важна приватность", side: "left", time: "10:42" },
    { text: "Именно! И работает даже на слабом интернете", side: "right", time: "10:42" },
    { text: "Уже позвал всю команду 🚀", side: "right", time: "10:43" },
  ];

  return (
    <div className="w-[320px] md:w-[360px] glass rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700/80 to-blue-600/80 px-5 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
          АТ
        </div>
        <div className="flex-1">
          <div className="text-white font-semibold text-sm">Алексей Тихонов</div>
          <div className="text-white/60 text-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            В сети
          </div>
        </div>
        <div className="flex gap-3 text-white/70">
          <svg className="w-5 h-5 hover:text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <svg className="w-5 h-5 hover:text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {/* Messages */}
      <div className="bg-[#0D0D20] px-4 py-5 space-y-3 min-h-[280px]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.side === "right" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.side === "right"
                  ? "gradient-bg text-white rounded-br-sm"
                  : "bg-white/10 text-white/90 rounded-bl-sm"
              }`}
            >
              {msg.text}
              <div className={`text-[10px] mt-1 ${msg.side === "right" ? "text-white/60 text-right" : "text-white/40"}`}>
                {msg.time}
                {msg.side === "right" && (
                  <span className="ml-1 text-blue-300">✓✓</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-[#0D0D20] border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <div className="flex-1 bg-white/10 rounded-full px-4 py-2 text-sm text-white/40">
          Написать сообщение...
        </div>
        <button className="w-9 h-9 gradient-bg rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
