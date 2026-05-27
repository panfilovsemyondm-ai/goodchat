const links = {
  Продукт: ["Возможности", "Безопасность SS3", "Децентрализация", "Что нового", "Статус системы"],
  Компания: ["О нас", "Блог", "Карьера", "Пресса", "Контакты"],
  Поддержка: ["Справочный центр", "Сообщество", "Конфиденциальность", "Условия", "GDPR"],
  Разработчикам: ["API", "Документация", "Open Source", "Аудит кода", "Bug Bounty"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* CTA banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 p-8 md:p-12 text-center"
          style={{ background: "linear-gradient(135deg, #0369A1 0%, #0C4A6E 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
              Готовы защитить коммуникации?
            </h2>
            <p className="text-sky-200 mb-8 max-w-lg mx-auto">
              14 дней бесплатно. Без кредитной карты. Отмена в любой момент.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-white text-sky-800 font-bold px-8 py-3.5 rounded-xl hover:bg-sky-50 transition-colors cursor-pointer text-sm"
              >
                Начать бесплатно
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer text-sm"
              >
                Запросить демо
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 cursor-pointer">
              <div className="w-8 h-8 cta-gradient rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3-3-3z" />
                </svg>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>GoodChat</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Корпоративный мессенджер с шифрованием SS3 и децентрализованной архитектурой.
            </p>
            <div className="flex gap-3">
              {[
                "M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z",
                "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.034.05a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z",
              ].map((path, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="text-sm font-semibold text-white mb-4">{cat}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2025 GoodChat. Все права защищены.</p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            Защищено шифрованием SS3
          </div>
        </div>
      </div>
    </footer>
  );
}
