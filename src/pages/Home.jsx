import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <div>
            <Navbar />
            <div className="container">
            <section className="section intro">
                <div className="intro-cont">
                    <span className="badge">Available for work</span>
                    <h1 style={{fontSize:42, margin:'12px 0 8px'}}>Hi, I’m <span style={{color:'var(--primary)'}}>Jaganmohan Jangam</span></h1>
                    <p className="muted">Fullstack Web Developer • Coding Enthusiast • Problem Solver</p>
                    <p style={{marginTop:12}}>I build fast, accessible web apps with React, NodeJs, MongoDB, modern tooling, and a love for clean UI/UX.</p>
                    <div style={{display:'flex', gap:12, marginTop:16}}>
                        <a className="btn primary" href="/Jaganmohan_Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
                        <a className="btn" href="https://github.com/mohan983" target="_blank" rel="noreferrer">GitHub</a>
                        <a className="btn" href="https://www.linkedin.com/in/jaganmohan-jangam/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
                <img src="/profile.jpg" alt="Profile" className="profile" />
            </section>
            </div>
            <Footer/>
        </div>
    )
}