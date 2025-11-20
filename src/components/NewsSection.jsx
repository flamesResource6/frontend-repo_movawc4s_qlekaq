import { useEffect, useState } from 'react'

function NewsCard({ item }) {
  return (
    <div className="bg-slate-800/60 border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
      {item.image_url && (
        <img src={item.image_url} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-3" />
      )}
      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
      <p className="text-blue-200/80 text-sm mt-2 line-clamp-3">{item.summary}</p>
      {item.published_at && (
        <p className="text-xs text-blue-300/60 mt-3">{new Date(item.published_at).toLocaleDateString('ru-RU')}</p>
      )}
    </div>
  )
}

function NewsSection() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/news`)
        const data = await res.json()
        setNews(data)
      } catch (e) {
        setError('Не удалось загрузить новости')
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  return (
    <section id="news" className="relative">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Новости</h2>
            <p className="text-blue-200/80 mt-1">Последние обновления колледжа</p>
          </div>
        </div>

        {loading ? (
          <p className="text-blue-200/80">Загрузка...</p>
        ) : error ? (
          <p className="text-red-300">{error}</p>
        ) : news.length === 0 ? (
          <div className="text-blue-200/80">Пока нет новостей. Добавьте первую через API.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {news.map((n) => (
              <NewsCard key={n.id} item={n} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default NewsSection
