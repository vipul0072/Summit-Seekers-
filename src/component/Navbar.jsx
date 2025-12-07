import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import '../styles/Navbar.css';
import {  NavLink } from "react-router-dom";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    function change() {
        setIsOpen(!isOpen)
    }


    return (
        <header className="header-container">
            <div className="contact-container">
                <div className="contact-details">
                    <MdMail className="icon" /> <a href="mailto:rawatvipul54gmail.com">summitseekers2025@gmail.com</a>
                    <span>/</span>
                    <FaPhone className="icon" /> <a href="tel:+916396702962">6396702962</a>
                    <span> / </span>
                    <FaPhone className="icon" /> <a href="tel:+917579411145">7579411145</a>
                </div>
            </div>
            <div className="search">
                <h2 className="search-h2">Summit Seekers</h2>
                <input className="search-input" type="text" placeholder="Enter yoy next trek" />
                <div className="navbar">

                    <ul className={`nav ${isOpen ? 'open' : ''}`}>
                        <li className="cross-icon" onClick={change}>&times;</li>

                        <li className="active nav-links"><NavLink className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        } to="/">HOME</NavLink></li>
                        <li className="active nav-links"><NavLink className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        } to="/about">ABOUT</NavLink></li>
                        {/* <li className="active nav-links"><NavLink className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        } to="/trek">TREKS</NavLink></li> */}
                        <li className="active nav-links"><NavLink className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        } to="/services">SERVICES</NavLink></li>
                        <li className="active nav-links"><NavLink className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        } to="/contact">CONTACT</NavLink></li>
                    </ul>
                    <li className="menu-icon" onClick={change}> &#9776;</li>
                </div>

            </div>
        </header>
    )
}

export default Navbar;