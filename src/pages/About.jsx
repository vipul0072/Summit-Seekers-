import '../styles/About.css';
import img from '../assets/vipul.jpg';
import img2 from '../assets/img1.jpg';
import img3 from '../assets/img2.jpg';

function About() {
    return (
        <div className="about-container">
            <div className="about-contents">
                <div className="director-card">
                    <div className="image">
                        <img src={img} alt="Mr. Vipul Rawat" />
                        <h3>Mr. Vipul Rawat</h3>
                        <a className='story' href='/founder' >Read full story</a>
                    </div>
                    <div className="message">
                        <h2>Founder & CEO</h2>
                        <p>As Director of Summit Seekers, my passion for the mountains began with childhood treks through Uttarakhand's rugged trails, fueling a lifelong commitment to sharing these transformative experiences. Our team crafts personalized adventures—from beginner hikes to challenging expeditions—that prioritize safety, sustainability, and unforgettable moments in nature's embrace.</p>
                        
                    </div>
                </div>
                <div className="director-card">
                    <div className="image">
                        <img src={img2} alt="Mr. Vipul Rawat" />
                        <h3>Co-Founder</h3>
                        <a className='story' href='/co-founder'>Read full story</a>
                    </div>
                    <div className="message">
                        <h2>Co-Founder & Partners</h2>
                        <p>As Director of Summit Seekers, my passion for the mountains began with childhood treks through Uttarakhand's rugged trails, fueling a lifelong commitment to sharing these transformative experiences. Our team crafts personalized adventures—from beginner hikes to challenging expeditions—that prioritize safety, sustainability, and unforgettable moments in nature's embrace.</p>
                    </div>
                </div>
                <div className="director-card">
                    <div className="image">
                        <img src={img3} alt="Mr. Vipul Rawat" />
                        <h3>Marketing Head</h3>
                        <a className='story' href='/marketinghead'>Read full story</a>
                    </div>
                    <div className="message">
                        <h2>Co-Founder & Marketing Head</h2>
                        <p>As Director of Summit Seekers, my passion for the mountains began with childhood treks through Uttarakhand's rugged trails, fueling a lifelong commitment to sharing these transformative experiences. Our team crafts personalized adventures—from beginner hikes to challenging expeditions—that prioritize safety, sustainability, and unforgettable moments in nature's embrace.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
