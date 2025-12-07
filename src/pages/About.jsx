import '../styles/About.css';
import img from '../assets/img1.jpg';

function About() {
    return (
        <div className="about-container">
            <div className="about-contents">
                <div className="director-card">
                    <div className="image">
                        <img src={img} alt="Mr. Vipul Rawat" />
                        <h3>Mr. Vipul Rawat</h3>
                    </div>
                    <div className="message">
                        <h2>Director's Message</h2>
                        <p>As Director of Summit Seekers, my passion for the mountains began with childhood treks through Uttarakhand's rugged trails, fueling a lifelong commitment to sharing these transformative experiences. Our team crafts personalized adventures—from beginner hikes to challenging expeditions—that prioritize safety, sustainability, and unforgettable moments in nature's embrace.</p>
                    </div>
                </div>
                <div className="director-card">
                    <div className="image">
                        <img src={img} alt="Mr. Vipul Rawat" />
                        <h3>Mr. Vipul Rawat</h3>
                    </div>
                    <div className="message">
                        <h2>Director's Message</h2>
                        <p>As Director of Summit Seekers, my passion for the mountains began with childhood treks through Uttarakhand's rugged trails, fueling a lifelong commitment to sharing these transformative experiences. Our team crafts personalized adventures—from beginner hikes to challenging expeditions—that prioritize safety, sustainability, and unforgettable moments in nature's embrace.</p>
                    </div>
                </div>
                <div className="director-card">
                    <div className="image">
                        <img src={img} alt="Mr. Vipul Rawat" />
                        <h3>Mr. Vipul Rawat</h3>
                    </div>
                    <div className="message">
                        <h2>Director's Message</h2>
                        <p>As Director of Summit Seekers, my passion for the mountains began with childhood treks through Uttarakhand's rugged trails, fueling a lifelong commitment to sharing these transformative experiences. Our team crafts personalized adventures—from beginner hikes to challenging expeditions—that prioritize safety, sustainability, and unforgettable moments in nature's embrace.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
