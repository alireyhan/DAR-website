import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import navlogo from "./images/navlogo.png";
import Login from '../components/login';
export default function Navbar() {
    const [language, setLanguage] = useState("English");
    const [open, setOpen] = useState(false);

    return (
        <>

            <header className="glass-header">
                <div className="header-container">
                    <div className="logo">
                    

                        <img
                            className="navlogo" src={navlogo}
                            alt="dar logo"
                        />

                    </div>

                    <nav>
                        <ul>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/project">Projects</Link></li>
                            <li><Link to="/catalogue">Catalogue</Link></li>
                            <li><Link to="/appointment">Appointment</Link></li>
                        </ul>
                    </nav>

                    <div className="header-right">
                        <div className="lang-section">
                            <div
                                className="lang-display"
                                onClick={() => setOpen(!open)}
                            >
                                {language === "English" ? "EN" : "AR"} ▼
                            </div>

                            {open && (
                                <div className="lang-dropdown">
                                    <div
                                        className="lang-option"
                                        onClick={() => {
                                            setLanguage("English");
                                            setOpen(false);
                                        }}
                                    >
                                        English
                                    </div>
                                    <div
                                        className="lang-option"
                                        onClick={() => {
                                            setLanguage("Arabic");
                                            setOpen(false);
                                        }}
                                    >
                                        Arabic
                                    </div>
                                </div>
                            )}
                        </div>

                        <span className="separator">|</span>

                        <div  className="auth-link">
                         <Link to="/login" className='auth-a'>Login / Sign Up</Link>
                        </div>

                        <Link to="#" className="btn-platform">
                            Go to DAR Platform <span className="arrow">↗</span>
                        </Link>
                    </div>
                </div>
            </header>


        </>
    )
}
