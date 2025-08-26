import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  return (
    <>
      <div className="navbar nav-md">
        <Link className="brand" to="/">MyPortfolio</Link>
        <div className="links">
          <ThemeToggle/>
          {user ? (
            <button className="btn" onClick={() => { logout(); navigate('/') }}>
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>

      <div className="navbar nav-lg">
        <Link className="brand" to="/">MyPortfolio</Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <ThemeToggle/>
          {user ? (
            <button className="btn" onClick={() => { logout(); navigate('/') }}>
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </>
  )
}
