import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewsSection from './components/NewsSection'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_50%)]"></div>
      <Navbar />
      <Hero />
      <NewsSection />
      <EventsSection />
      <Footer />
    </div>
  )
}

export default App
