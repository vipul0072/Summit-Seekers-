import { FaInfoCircle, FaPhone, FaWhatsapp } from 'react-icons/fa';
import first from '../assets/img1.jpg';
import second from '../assets/img2.jpg';
import third from '../assets/img3.webp';
import '../styles/Trek.css';
import {  NavLink } from 'react-router-dom';


function Trek() {

    const treks = [
        { name: "Kedarkantha", img1: first, link: '/first', description: "Winter trek to a scenic Himalayan peak." },
        { name: "Harkidun", img1: second, link: '/second', description: "Explore lush meadows and rare flora." },
        { name: "Chansheel pass", img1: third, link: '/third', description: "Majestic landscapes and traditional villages." },
    ];

    return (
        <div className="card-container">
            <div className="card">
                {treks.map((trek, idx) => (
                    <div className="card-content" key={idx}>
                        <img className="card-content-image" src={trek.img1} alt="" width={400} height={250} />
                        <h2 className="card-content-heading">{trek.name}</h2>
                        <p className="card-content-para">{trek.description}</p>

                        <div className="trek-buttons">
                            <a href="tel:6396702962" className="btn btn-call" >
                                <FaPhone style={{ marginRight: 6 }} />
                            </a>

                            <a
                                href="https://wa.me/916396702962"
                                className="btn btn-whatsapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Chat on WhatsApp about ${trek.name}`}
                            >
                                <FaWhatsapp style={{ marginRight: 6 }} />
                            </a>

                            <br></br>
                            <NavLink to={trek.link} className="btn btn-details" >
                                <FaInfoCircle style={{ marginRight: 6 }} />
                                View Details
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trek;