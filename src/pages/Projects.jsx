import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/ProjectCard";
import { projects } from '../data/sample.js'

export default function Projects(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <section className="section">
                    <h2>Projects</h2>
                    <p className="muted">Highlighted work with links to live demos and code.</p>
                    <div className="projects">
                    {projects.map((p, idx) => <ProjectCard key={idx} project={p} />)}
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}