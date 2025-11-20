function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            КАИТ20 — колледж цифровых профессий
          </h1>
          <p className="mt-6 text-blue-100/90 text-lg md:text-xl">
            Современное образование, практико-ориентированное обучение и партнерства с IT-компаниями. Стартуйте карьеру в технологиях вместе с нами.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#news" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">Последние новости</a>
            <a href="#events" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition border border-white/20">Ближайшие события</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
