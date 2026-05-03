import { Link } from 'react-router-dom'
import skillsData from '../data/skills.json'

function Home() {
  const featuredSkills = skillsData.slice(0, 3)
  return (
    <div className="max-w-6xl mx-auto px-6">
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
            <Link
              to={`/skill/${skill.id}`}
              key={skill.id}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-2 py-0.5 text-xs font-medium text-slate-600 bg-slate-100 rounded-md mb-3">
                  {skill.category}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                  {skill.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">by {skill.teacher}</p>
                <div className="mt-3 flex items-center gap-1 text-sm">
                  <span className="text-amber-500">★</span>
                  <span className="font-medium text-slate-900">{skill.rating}</span>
                  <span className="text-slate-500">({skill.reviewsCount} reviews)</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home