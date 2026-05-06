import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function SkillDetail({ favorites, toggleFavorite }) {
  const { id } = useParams()

  const [skill, setSkill] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSkill = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await axios.get('/data/skills.json')
        const foundSkill = response.data.find((s) => s.id === Number(id))

        if (foundSkill) {
          setSkill(foundSkill)
        } else {
          setError('Skill not found')
        }
      } catch (err) {
        setError('Failed to load skill details')
        console.error('Error fetching skill:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSkill()
  }, [id])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-slate-500 text-lg">Loading skill details...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-red-500 text-lg">{error}</p>
        <Link
          to="/browse"
          className="inline-block mt-4 text-sm text-slate-600 hover:text-slate-900 transition-colors"
        >
          ← Back to browse
        </Link>
      </div>
    )
  }

  const isFavorite = favorites.includes(skill.id)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      <Link
        to="/browse"
        className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 transition-colors mb-6"
      >
        ← Back to browse
      </Link>

      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-100 mb-8">
        <img
          src={skill.image}
          alt={skill.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block px-2 py-0.5 text-xs font-medium text-slate-600 bg-slate-100 rounded-md">
            {skill.category}
          </span>
          <span className="inline-block px-2 py-0.5 text-xs font-medium text-blue-700 bg-blue-50 rounded-md">
            {skill.level}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            {skill.title}
          </h1>

          {/* NEW: Favorite button */}
          <button
            onClick={() => toggleFavorite(skill.id)}
            className="shrink-0 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200"
          >
            {isFavorite ? (
              <span className="text-red-500 text-2xl">♥</span>
            ) : (
              <span className="text-slate-400 hover:text-red-500 text-2xl">♡</span>
            )}
          </button>
        </div>

        <div className="mt-3 flex items-center gap-3 text-sm">
          <span className="text-slate-600">
            Taught by <span className="font-medium text-slate-900">{skill.teacher}</span>
          </span>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1">
            <span className="text-amber-500">★</span>
            <span className="font-medium text-slate-900">{skill.rating}</span>
            <span className="text-slate-500">({skill.reviewsCount} reviews)</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">About this skill</h2>
        <p className="text-slate-600 leading-relaxed">{skill.description}</p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
          In exchange, {skill.teacher.split(' ')[0]} wants to learn
        </h2>
        <p className="text-xl font-semibold text-slate-900">
          {skill.wantsToLearn}
        </p>
      </div>

      <button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-md">
        Request Skill Exchange
      </button>

    </div>
  )
}

export default SkillDetail