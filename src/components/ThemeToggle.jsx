import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button className="btn" onClick={toggleTheme}>
      {theme === 'light' ? ' ⚫ ' : '⚪'}
    </button>
  )
}
