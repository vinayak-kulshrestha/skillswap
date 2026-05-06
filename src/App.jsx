import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Browse from './pages/Browse'
import SkillDetail from './pages/SkillDetail'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'

function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (skillId) => {
    setFavorites((prev) => {
      if (prev.includes(skillId)) {
        return prev.filter((id) => id !== skillId)
      } else {
        return [...prev, skillId]
      }
    })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home favorites={favorites} toggleFavorite={toggleFavorite}/>} />
        <Route
          path="/browse"
          element={<Browse favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/skill/:id"
          element={<SkillDetail favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App