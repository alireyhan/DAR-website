import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

// Images
import footerLogo from "./images/footer.png";
import newsletterImg from "./images/p1.png";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <img src={footerLogo} alt="DAR Logo" className="footer-logo" />
                    <p>{t('footer.supportEmail')}</p>
                    <br />
                    <div style={{ marginBottom: '10px' }}>
                        <h4 style={{ marginBottom: '10px' }}>{t('footer.customerCare')}</h4>
                        <p>
                            <span className="neon-text">
                                <FaPhoneAlt style={{ fontSize: '12px', marginRight: '8px' }} />
                            </span>
                            {t('footer.laborServices')} : <span className="neon-text">{t('footer.mobileValue')}</span>
                        </p>
                    </div>
                    {Object.entries(t('footer.roles', { returnObjects: true })).map(([key, role]) => (
                        <div key={key} style={{ marginBottom: '5px' }}>
                            <p>
                                <span className="neon-text">
                                    <FaPhoneAlt style={{ fontSize: '12px', marginRight: '8px' }} />
                                </span>
                                {role} : <span className="neon-text">{t(`footer.rolePhones.${key}`)}</span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="footer-middle">
                    <div className="footer-links">
                        <h4>{t('footer.pages')}</h4>
                        <ul>
                            <li>{t('footer.home')}</li>
                            <li>{t('footer.aboutUs')}</li>
                            <li>{t('footer.catalogue')}</li>
                            <li>{t('footer.projects')}</li>
                            <li>{t('footer.appointments')}</li>
                            <li>{t('footer.contact')}</li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>{t('footer.legal')}</h4>
                        <ul>
                            <li>{t('footer.terms')}</li>
                            <li>{t('footer.privacy')}</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="newsletter-card">
                        <img src={newsletterImg} alt="Newsletter" />
                        <div className="newsletter-text">
                            <h4>{t('footer.subscribe')}</h4>
                            <p>{t('footer.newsletterDesc')}</p>
                        </div>
                        <span className="arrow">→</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="social-icons">
                    <a href="https://www.instagram.com/dar.interiors.kw?igsh=bjR0cGYyMXU5d2Zw&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/share/1JwdvQrZNe/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.tiktok.com/@darinteriors.kw?_r=1&_t=ZS-92kJZ8amJNs" target="_blank" rel="noopener noreferrer">
                        <FaTiktok />
                    </a>
                    <a href="https://wa.me/96565964302?text=Hello%2C%20I%20want%20to%20get%20more%20information." target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </div>
                <p>{t('footer.rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;
