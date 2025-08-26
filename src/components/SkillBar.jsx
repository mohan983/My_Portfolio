export default function SkillBar({ name, level }) {
  return (
    <div className="skill">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <strong>{name}</strong>
        <span className="badge">{level}%</span>
      </div>
      <div className="bar"><span style={{ width: level + '%' }} /></div>
    </div>
  )
}
