import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">

        <NavLink to="/" className="text-base font-semibold text-slate-900 tracking-tight hover:text-slate-700 transition-colors">
          SkillSwap
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-xs font-medium transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-slate-900 after:transition-all after:duration-300 ${
                isActive
                  ? "text-slate-900 after:w-full"
                  : "text-slate-500 hover:text-slate-900 after:w-0 hover:after:w-full"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/browse"
            className={({ isActive }) =>
              `relative text-xs font-medium transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-slate-900 after:transition-all after:duration-300 ${
                isActive
                  ? "text-slate-900 after:w-full"
                  : "text-slate-500 hover:text-slate-900 after:w-0 hover:after:w-full"
              }`
            }
          >
            Browse
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `relative text-xs font-medium transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-slate-900 after:transition-all after:duration-300 ${
                isActive
                  ? "text-slate-900 after:w-full"
                  : "text-slate-500 hover:text-slate-900 after:w-0 hover:after:w-full"
              }`
            }
          >
            Favorites
          </NavLink>
        </div>

        <NavLink
          to="/browse"
          className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-200 hover:shadow-md hover:-translate-y-0.2"
        >
          Get Started
        </NavLink>

      </div>
    </nav>
  )
}

export default Navbar