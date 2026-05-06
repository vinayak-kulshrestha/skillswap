import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SkillCard from '../components/SkillCard'

function Favorites({ favorites, toggleFavorite }) {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/data/skills.json')
        setSkills(response.data)
      } catch (err) {
        console.error('Error fetching skills:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  const favoriteSkills = skills.filter((skill) => favorites.includes(skill.id))

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-slate-500 text-lg">Loading...</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">Your Favorites</h1>
        <p className="mt-2 text-slate-600">
          {favoriteSkills.length === 0
            ? 'No favorites yet. Start browsing to save skills you love!'
            : `${favoriteSkills.length} ${favoriteSkills.length === 1 ? 'skill' : 'skills'} saved`}
        </p>
      </div>

      {favoriteSkills.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
          <p className="text-6xl mb-4">💔</p>
          <p className="text-slate-600 text-lg mb-6">
            You haven't favorited any skills yet
          </p>
          <Link
            to="/browse"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-md"
          >
            Browse Skills
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites