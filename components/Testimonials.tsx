const testimonials = [
  {
    name: "Мария Соколова",
    role: "Product Manager, Яндекс",
    avatar: "МС",
    color: "from-pink-400 to-rose-500",
    text: "Перевела всю команду на GoodChat три месяца назад. Скорость работы выросла — теперь общение не отвлекает, а помогает. Видеозвонки стабильнее Zoom.",
    stars: 5,
  },
  {
    name: "Дмитрий Волков",
    role: "CEO, Startup Garage",
    avatar: "ДВ",
    color: "from-blue-400 to-cyan-500",
    text: "Наконец мессенджер, где шифрование — не маркетинг, а реальная функция. Юридический отдел доволен, разработчики довольны, инвесторы тоже.",
    stars: 5,
  },
  {
    name: "Анна Громова",
    role: "Дизайнер, Freelance",
    avatar: "АГ",
    color: "from-purple-400 to-violet-500",
    text: "Голосовые с автотранскрипцией — это спасение. Клиент записал бриф голосом, я прочитала текст, сэкономила 20 минут. Использую каждый день.",
    stars: 5,
  },
  {
    name: "Игорь Петров",
    role: "Tech Lead, Ozon",
    avatar: "ИП",
    color: "from-green-400 to-emerald-500",
    text: "Интеграция с GitHub Webhook через API GoodChat — уведомления в чат прямо из пайплайна. Боты настроились за час, документация отличная.",
    stars: 5,
  },
  {
    name: "Светлана Ким",
    role: "HR Director, Тинькофф",
    avatar: "СК",
    color: "from-yellow-400 to-orange-500",
    text: "Канал для всей компании в 5000 человек — работает без лагов. Опросы, объявления, боты HR — всё в одном месте. Slack обошлись в 10 раз дороже.",
    stars: 5,
  },
  {
    name: "Артём Новиков",
    role: "Разработчик, Самозанятый",
    avatar: "АН",
    color: "from-teal-400 to-cyan-500",
    text: "Работает в Индии, Германии и дома в Казани одинаково быстро. Для удалёнки на несколько стран — лучшее решение из всех, что пробовал.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0A0A1B] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Отзывы
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Нам доверяют{" "}
            <span className="gradient-text">лучшие команды</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Более 50 000 компаний уже перешли на GoodChat. Вот что они говорят.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
