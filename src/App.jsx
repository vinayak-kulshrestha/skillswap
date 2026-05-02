import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import SkillDetail from './pages/SkillDetail'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'


function App(){
  return(
    <div className='min-h-screen bg-gray-100'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/browse' element={<Browse/>}/> 
        <Route path='/skill/:id' element={<SkillDetail/>}/> 
        <Route path='/favorites' element={<Favorites/>}/> 
        <Route path='*' element={<NotFound/>}/> 
      </Routes>
    </div>
  )
}
export default App 