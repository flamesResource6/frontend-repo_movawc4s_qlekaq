import { useEffect, useState } from 'react'

function EventCard({ item }) {
  return (
    <div className="bg-slate-800/60 border border-white/10 rounded-xl p-5">
      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
      <p className="text-blue-200/80 text-sm mt-2">{item.description}</p>
      <div className="flex items-center justify-between mt-4 text-sm text-blue-300/80">
        <span>{new Date(item.date).toLocaleString('ru-RU')}</span>
        <span>{item.location}</span>
      </div>
      {item.link && (
        <a href={item.link} target="_blank" className="inline-block mt-4 text-blue-300 hover:text-white transition">
          Подробнее →
        </a>
      )}
    </div>
  )
}

function EventsSection() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/events`)
        const data = await res.json()
        setEvents(data)
      } catch (e) {
        setError('Не удалось загрузить события')
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  return (
    <section id="events" className="relative">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">События</h2>
            <p className="text-blue-200/80 mt-1">Ближайшие активности и мероприятия</p>
          </div>
        </div>

        {loading ? (
          <p className="text-blue-200/80">Загрузка...</p>
        ) : error ? (
          <p className="text-red-300">{error}</p>
        ) : events.length === 0 ? (
          <div className="text-blue-200/80">Пока нет событий. Добавьте первое через API.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((e) => (
              <EventCard key={e.id} item={e} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default EventsSection
