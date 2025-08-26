import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<ProtectedRoute> <About/> </ProtectedRoute>}/>
      <Route path='/skills' element={<ProtectedRoute> <Skills/> </ProtectedRoute>}/>
      <Route path='/projects' element={<ProtectedRoute> <Projects/> </ProtectedRoute>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<div className="container"><h1>404</h1><p>Page not found.</p></div>} />
    </Routes>
  )
}
