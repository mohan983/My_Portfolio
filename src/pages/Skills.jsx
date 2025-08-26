import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import SkillBar from "../components/SkillBar";
import { skills } from '../data/sample.js'

export default function Skills(){
    return(
        <div>
            <Navbar/>
            <div className="container">
                <section className="section">
                    <h2>Skills</h2>
                    <p className="muted">A snapshot of my core capabilities.</p>
                    <div className="card">
                        <div className="skillbar">
                            {skills.map(s => <SkillBar key={s.name} name={s.name} level={s.level} />)}
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}