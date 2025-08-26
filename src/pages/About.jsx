import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="section">
                    <h2>About Me</h2>
                    <div className="card">
                        <p className="about">
                        I’m Jaganmohan Jangam, a passionate Full-Stack Developer and an Engineering Graduate
                        in Electrical Engineering from NIT Srinagar. Alongside my B.Tech, 
                        I’ve been pursuing an Industry-Ready Certification in Full-Stack Development at Nxtwave,
                        where I’ve built hands-on expertise in modern web technologies.
                        </p>

                        <p className="about">
                        I enjoy transforming ideas into interactive, user-friendly applications,
                        whether it’s building clones of popular platforms like Amazon, YouTube, or Twitter,
                        or designing games that challenge memory and logic. With a solid grasp of
                        data structures, algorithms, and scalable backend systems, 
                        I aim to bridge my engineering mindset with software innovation to craft impactful digital solutions.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}