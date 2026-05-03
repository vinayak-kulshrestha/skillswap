import { Link } from 'react-router-dom'
import skillsData from '../data/skills.json'
import SkillCard from '../components/SkillCard'

function Home() {
  // Pick the first 3 skills as "featured"
  const featuredSkills = skillsData.slice(0, 3)

  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* Hero Section */}
      <section className="py-20 text-center">
        <span className="inline-block px-3 py-1 text-xs font-medium text-slate-700 bg-slate-200 rounded-full mb-6">
          ✨ Trade skills, not money
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          Learn anything by <br />
          <span className="text-slate-500">teaching what you know</span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          SkillSwap connects students who want to learn with students who want to teach.
          Exchange skills directly — no money involved.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            to="/browse"
            className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            Browse Skills
          </Link>
          <Link
            to="/favorites"
            className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-sm font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            View Favorites
          </Link>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Skills</h2>
            <p className="mt-2 text-slate-600">Hand-picked skills from our community</p>
          </div>
          <Link
            to="/browse"
            className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home