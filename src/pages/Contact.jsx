import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <section className="section">
                    <h2>Contact</h2>
                    <p className="muted">Send me a message — I’ll reply within 24 hours.</p>
                    <ContactForm />
                </section>
            </div>
            <Footer/>
        </>
    )
}