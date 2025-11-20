import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="KAIT20" className="w-8 h-8" />
          <div>
            <p className="text-white font-semibold leading-tight">КАИТ20</p>
            <p className="text-xs text-blue-300/80">Колледж современных технологий</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-blue-100/90">
          <a href="#news" className="hover:text-white transition">Новости</a>
          <a href="#events" className="hover:text-white transition">События</a>
          <a href="#about" className="hover:text-white transition">О колледже</a>
          <a href="#contacts" className="hover:text-white transition">Контакты</a>
        </nav>
        <button className="md:hidden p-2 text-blue-100" aria-label="menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
