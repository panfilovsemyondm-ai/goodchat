export default function CTA() {
  return (
    <section className="bg-[#0D0D22] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-bg opacity-90" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 text-center py-16 px-8">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-6 text-white/90 text-sm">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              Бесплатно до 200 участников
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Готовы попробовать?
              <br />
              Это займёт 30 секунд.
            </h2>

            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Присоединяйтесь к 2 миллионам пользователей, которые уже общаются
              быстро, безопасно и с удовольствием.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-purple-700 font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/90 transition-all hover:scale-105"
              >
                Создать аккаунт бесплатно
              </a>
              <a
                href="#"
                className="bg-white/15 text-white font-semibold px-8 py-4 rounded-2xl text-base hover:bg-white/25 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.32.07 2.25.78 3.02.8 1.16-.17 2.26-.89 3.44-.86 1.45.06 2.58.7 3.3 1.8-2.98 1.8-2.29 5.4.32 6.5-.64 1.64-1.46 3.23-2.08 4.64zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Скачать для iOS
              </a>
              <a
                href="#"
                className="bg-white/15 text-white font-semibold px-8 py-4 rounded-2xl text-base hover:bg-white/25 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.341a1.5 1.5 0 01-2.089.388l-4.053-2.98a.5.5 0 00-.762.425v5.827a1 1 0 01-1.619.786l-8-6.5A1 1 0 011 12.5V5a1 1 0 011.619-.786l8 6.5a.5.5 0 00.762-.425V4.462a1.5 1.5 0 012.912-.507l4 11a1.5 1.5 0 01-.77 1.386z" />
                </svg>
                Скачать для Android
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
