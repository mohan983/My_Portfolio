import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer nav-md">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}
