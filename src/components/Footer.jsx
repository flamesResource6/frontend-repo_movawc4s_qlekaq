function Footer() {
  return (
    <footer id="contacts" className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10 text-blue-200/80">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-white font-semibold">КАИТ20</p>
            <p className="text-sm mt-2">Колледж информационных технологий и современных профессий.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Контакты</p>
            <p className="text-sm mt-2">г. Москва, ул. Примерная, 1</p>
            <p className="text-sm">+7 (999) 123-45-67</p>
            <p className="text-sm">info@kait20.ru</p>
          </div>
          <div>
            <p className="text-white font-semibold">Абитуриентам</p>
            <p className="text-sm mt-2">Приемная комиссия: +7 (999) 000-00-00</p>
            <p className="text-sm">Пн-Пт 9:00–18:00</p>
          </div>
        </div>
        <p className="text-xs mt-8 text-blue-300/60">© {new Date().getFullYear()} КАИТ20. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer
