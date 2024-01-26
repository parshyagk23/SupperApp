
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Register from './Pages/Register/Index'
import Info from './Pages/Info/Index'
import Movie from './Pages/Movie/Index'
import Showcase from './Pages/Showcase/Index'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Info' element={<Info/>} />
      <Route path='/Movie' element={<Movie/>} />
      <Route path='/Showcase' element={<Showcase/>} />
      <Route path='*' element={<h1>404 page not found 🤔😥😑🤐</h1>} />
    </Routes>
      
    </>
  )
}

export default App
