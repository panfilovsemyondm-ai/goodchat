import ChatMockup from "./ChatMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A1B]">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-violet-500/10 blur-[80px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-white/80">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Более 2 млн пользователей онлайн
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Общение без{" "}
            <span className="gradient-text">границ</span>{" "}
            и компромиссов
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            GoodChat — мессенджер нового поколения. Мгновенные сообщения,
            сквозное шифрование, голосовые и видеозвонки в HD. Всё в одном приложении.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="gradient-bg text-white font-bold px-8 py-4 rounded-2xl text-base hover:opacity-90 transition-all hover:scale-105 active:scale-100 animate-pulse-glow"
            >
              Начать бесплатно →
            </a>
            <a
              href="#how"
              className="glass text-white font-semibold px-8 py-4 rounded-2xl text-base hover:bg-white/15 transition-all"
            >
              Как это работает
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
            {[
              { value: "2M+", label: "Пользователей" },
              { value: "99.9%", label: "Аптайм" },
              { value: "0ms", label: "Задержка" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — chat mockup */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="animate-float">
            <ChatMockup />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A1B] to-transparent pointer-events-none" />
    </section>
  );
}
