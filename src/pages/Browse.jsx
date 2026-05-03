import { useState, useEffect } from 'react'
import axios from 'axios'
import SkillCard from '../components/SkillCard'

function Browse() {
  const [skills, setSkills] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/data/skills.json')
        setSkills(response.data)
      } catch (err) {
        setError('Failed to load skills. Please try again later.')
        console.error('Error fetching skills:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-slate-500 text-lg">Loading skills...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">Browse Skills</h1>
        <p className="mt-2 text-slate-600">
          Explore {skills.length} skills shared by our community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Browse