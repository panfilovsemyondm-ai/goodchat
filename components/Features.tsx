const features = [
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    title: "Секретные чаты",
    desc: "Чаты, которые не синхронизируются в облако. Доступны только на одном устройстве.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Анонимные группы",
    desc: "Создавайте группы без привязки к личности. Никто не знает, кто создатель.",
  },
  {
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    title: "Темы и кастомизация",
    desc: "Полная кастомизация интерфейса — цвета, шрифты, размеры пузырей.",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Файлы до 4 ГБ",
    desc: "Передача файлов любого типа напрямую, без загрузки на сервер. P2P.",
  },
  {
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2",
    title: "Все платформы",
    desc: "iOS, Android, Windows, macOS, Linux, Web. Синхронизация зашифрована.",
  },
  {
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "Открытый код",
    desc: "Клиентская часть — open source. Проверьте сами, что мы не лжём о шифровании.",
  },
  {
    icon: "M12 18h.01M8 21h8a2 2 0 002-2v-2H6v2a2 2 0 002 2zM12 3a6 6 0 00-6 6 6 6 0 006 6 6 6 0 006-6 6 6 0 00-6-6z",
    title: "Режим инкогнито",
    desc: "Включите — и Comnata не оставит никаких следов на устройстве после закрытия.",
  },
  {
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    title: "Умные уведомления",
    desc: "Настройте расписание тишины и приоритеты — только важное пробуждает экран.",
  },
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    title: "Tor-маршрутизация",
    desc: "Встроенный Tor-режим для максимальной анонимности в сетях с цензурой.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Функционал
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Всё что нужно.<br />
            <span className="text-blue-600">Ничего лишнего.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Comnata — не просто мессенджер. Это инструмент для тех,
            кто думает о своей цифровой безопасности.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={f.title} className={`card p-5 flex gap-4 ${i === 0 ? "lg:col-span-2 bg-blue-600 border-blue-600 text-white" : ""}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${i === 0 ? "bg-white/20" : "bg-blue-50"}`}>
                <svg className={`w-5 h-5 ${i === 0 ? "text-white" : "text-blue-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={f.icon}/>
                </svg>
              </div>
              <div>
                <h3 className={`font-bold text-sm mb-1 ${i === 0 ? "text-white" : "text-slate-900"}`}>{f.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 0 ? "text-blue-100" : "text-slate-500"}`}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
