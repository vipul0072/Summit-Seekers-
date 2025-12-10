import { NavLink } from 'react-router-dom';
import '../styles/Footer.css'

function Footer() {
    return(
        <footer className="footer-container">
            <div className="footer-content">
                <div className="quick">

                    <h2 >Quick Links</h2>
                    <ul>
                        <li><NavLink className='quick-a' to='/'>Home</NavLink></li>
                        <li><NavLink className='quick-a' to="/about">About</NavLink></li>
                        <li><NavLink className='quick-a' href="/contact">Contact</NavLink></li>
                        <li><NavLink className='quick-a' href="/service">SERVICES</NavLink>Services</li>
                    </ul>
                    <p>Copyright © 2024 | Summit Seekers | All rights reserved.</p>
                    
                </div>
                <div className="quick">
                    <h2>Policies</h2>
                    <ul>
                        <li><NavLink className='quick-a' href="">Privacy policy</NavLink></li>
                        <li><NavLink className='quick-a' href="">Terms & condition</NavLink></li>
                        <li><NavLink className='quick-a' href="">Disclaimer</NavLink></li>
                        <li><NavLink className='quick-a' href="">Cancellation policy</NavLink></li>
                    </ul>
                </div>
                <div className="quick">
                    <h2>Contact Info</h2>
                    <ul>
                        <li><NavLink className='quick-a' href="tel:+91-6396702962">6396702062</NavLink></li>
                        <li><NavLink className='quick-a' href="mailto: rawatvipul54@gmail.com">info.summitseekers@gmail.com</NavLink></li>
                        <li><NavLink className='quick-a' href="">shanti vihar chowk, Dehradun, India, 248001</NavLink></li>
                    </ul>
                    <p>Designed & Developed by  <a href="https://my-personal-portfolio-three-gamma.vercel.app/" download='Vipul-Rawat.pdf' target='_blank'>Vipul Rawat</a>.</p>
                </div>
                
            </div>
            
        </footer>
    )
}

export default Footer;