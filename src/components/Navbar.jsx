import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navlogo from "./images/navlogo.png";
import Login from '../components/login';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
        setMobileMenuOpen(false);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const isRTL = i18n.language === "ar";
    document.body.dir = isRTL ? "rtl" : "ltr"; // Global direction

    return (
        <>
            <header className="glass-header" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
                <div className="header-container">
                    <div className="logo">
                        <img
                            className="navlogo" src={navlogo}
                            alt="dar logo"
                        />
                    </div>

                    <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>

                    <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                        <ul>
                            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</Link></li>
                            <li><Link to="/project" onClick={() => setMobileMenuOpen(false)}>{t('nav.projects')}</Link></li>
                            <li><Link to="/catalogue" onClick={() => setMobileMenuOpen(false)}>{t('nav.catalogue')}</Link></li>
                            <li><Link to="/appointment" onClick={() => setMobileMenuOpen(false)}>{t('nav.appointment')}</Link></li>
                            {user && <li><Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} style={{ color: '#bfff00', fontWeight: 'bold' }}>{t('nav.dashboard')}</Link></li>}
                        </ul>

                        {/* Mobile Actions */}
                        <div className="mobile-actions">
                            <div className="lang-section">
                                <span className="lang-display" onClick={() => changeLanguage(isRTL ? "en" : "ar")}>
                                    <span className="flag">🌐</span> {isRTL ? "English" : "العربية"}
                                </span>
                            </div>

                            {user ? (
                                <a href="#" className="auth-link" onClick={handleLogout}>{t('nav.logout')}</a>
                            ) : (
                                <Link to="/login" className="auth-link" onClick={() => setMobileMenuOpen(false)}>{t('nav.login')}</Link>
                            )}

                            <a href="https://platform.dar-kuwait.com/" target="_blank" rel="noopener noreferrer" className="btn-platform">
                                {t('nav.platform')} <span className="arrow">{isRTL ? "↖" : "↗"}</span>
                            </a>
                        </div>
                    </nav>

                    <div className="header-right">
                        {/* Language Dropdown */}
                        <div className="lang-section" style={{ position: 'relative' }}>
                            <div
                                className="lang-display"
                                onClick={() => setOpen(!open)}
                                style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
                            >
                                {i18n.language === "en" ? (
                                    <>🇬🇧 EN</>
                                ) : (
                                    <>🇰🇼 AR</>
                                )}
                                <span style={{ fontSize: '10px' }}>▼</span>
                            </div>

                            {open && (
                                <div className="lang-dropdown" style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: isRTL ? '0' : 'auto',
                                    right: isRTL ? 'auto' : '0',
                                    backgroundColor: '#001a14',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    padding: '5px 0',
                                    zIndex: 1000,
                                    width: '120px'
                                }}>
                                    <div
                                        className="lang-option"
                                        onClick={() => changeLanguage("en")}
                                        style={{ padding: '8px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}
                                    >
                                        <span style={{ fontSize: '1.2em' }}>🇬🇧</span> English
                                    </div>
                                    <div
                                        className="lang-option"
                                        onClick={() => changeLanguage("ar")}
                                        style={{ padding: '8px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}
                                    >
                                        <span style={{ fontSize: '1.2em' }}>🇰🇼</span> Arabic
                                    </div>
                                </div>
                            )}
                        </div>

                        <span className="separator">|</span>

                        <div className="auth-link">
                            {user ? (
                                <button onClick={handleLogout} className='auth-a' style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit', color: 'white' }}>
                                    {t('nav.logout')}
                                </button>
                            ) : (
                                <Link to="/login" className='auth-a'>{t('nav.login')}</Link>
                            )}
                        </div>

                        <a href="https://platform.dar-kuwait.com/" target="_blank" rel="noopener noreferrer" className="btn-platform">
                            {t('nav.platform')} <span className="arrow">{isRTL ? "↖" : "↗"}</span>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}
