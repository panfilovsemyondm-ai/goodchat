const links = {
  Продукт: ["Возможности", "Цены", "Безопасность", "Что нового", "Статус сервиса"],
  Компания: ["О нас", "Блог", "Карьера", "Пресса", "Контакты"],
  Разработчикам: ["API", "Документация", "Боты", "Вебхуки", "GitHub"],
  Поддержка: ["Справочный центр", "Сообщество", "Политика конфиденциальности", "Условия использования", "GDPR"],
};

const socials = [
  {
    name: "Telegram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.05 9.66c-.152.676-.548.84-1.11.524l-3.076-2.266-1.485 1.43c-.164.165-.302.302-.62.302l.22-3.126 5.7-5.148c.248-.22-.054-.342-.384-.122L6.74 14.37l-3.024-.944c-.658-.205-.67-.658.138-.974l11.82-4.558c.547-.2 1.026.134.888.354z" />
      </svg>
    ),
  },
  {
    name: "VK",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.727-1.033-1.01-1.49-.98-1.745.01-.253.987-.98.999-2.203.999-1.323 0-2.573-.013-3.601-.979-1.03-.967-1.47-2.243-1.47-3.48 0-1.238.44-2.513 1.24-3.449.85-1.02 2.098-1.52 3.376-1.52 1.377 0 2.432.568 3.054 1.69.62 1.12.862 2.5.862 2.5.252-.853.863-1.677 1.83-2.17 1.012-.517 2.07-.397 2.727.22.657.617.694 1.624.126 2.53l-.374.59c-.398.63-.346.863.17 1.48l.87 1.04c.91 1.05.934 2.294.15 2.266z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#070714] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">GoodChat</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Мессенджер нового поколения для команд и личного общения.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/40 hover:text-white/80 text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2025 GoodChat Inc. Все права защищены.</p>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Все системы работают штатно
          </div>
        </div>
      </div>
    </footer>
  );
}
