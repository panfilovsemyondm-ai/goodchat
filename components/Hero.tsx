import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section id="about" className="relative pt-28 pb-20 overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-50 blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-50 blur-[80px] opacity-40 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="section-label">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            Мессенджер нового поколения
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-6">
            Общайтесь так,<br />
            <span className="text-blue-600">чтобы никто</span><br />
            не узнал
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
            Comnata — мессенджер для тех, кто ценит настоящую приватность.
            Без номера телефона, без сбора данных, без слежки.
            Просто общение — чистое и защищённое.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#" className="btn-primary px-8 py-4 text-base">
              Начать анонимно →
            </a>
            <a href="#anon" className="btn-outline px-8 py-4 text-base">
              Как мы защищаем вас
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
            {[
              { val: "0", label: "Данных собирается" },
              { val: "E2E", label: "Шифрование" },
              { val: "500K+", label: "Пользователей" },
            ].map(s => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-2xl font-extrabold text-blue-600">{s.val}</div>
                <div className="text-sm text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="animate-float">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="relative max-w-7xl mx-auto px-6 mt-20">
        <p className="text-center text-sm text-slate-400 mb-6">Нас рекомендуют пользователи из</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale">
          {["Россия", "Казахстан", "Беларусь", "Германия", "США", "ОАЭ"].map(c => (
            <span key={c} className="text-sm font-semibold text-slate-600">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
