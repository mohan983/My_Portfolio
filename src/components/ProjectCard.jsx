export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} style={{width:'100%',height:160,objectFit:'cover',borderRadius:12, marginBottom:12}} />
      <h3 style={{margin:'6px 0'}}>{project.title}</h3>
      <p className="muted" style={{margin:'6px 0 12px'}}>{project.description}</p>
      <div style={{display:'flex',gap:8, flexWrap:'wrap', marginBottom:12}}>
        {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <div style={{display:'flex',gap:8}}>
        {project.demo && <a className="btn primary" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
        {project.repo && <a className="btn" href={project.repo} target="_blank" rel="noreferrer">Repository</a>}
      </div>
    </div>
  )
}
