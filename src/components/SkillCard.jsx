import { Link } from 'react-router-dom'

function SkillCard({ skill }) {
  return (
    <Link
      to={`/skill/${skill.id}`}
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
  )
}

export default SkillCard