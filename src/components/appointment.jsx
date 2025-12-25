import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./appointment.css";
import p1 from "./images/p1.png";
import p2 from "./images/p2.png";
import p3 from "./images/p3.png";
import p4 from "./images/p4.png";
import p5 from "./images/p5.png";
import p6 from "./images/p6.png";
import p8 from "./images/p8.png";
import p9 from "./images/p9.jpg";
import logo from "./images/image.png";
import p10 from "./images/p10.png";
import p11 from "./images/p11.png";
import p12 from "./images/p12.png";
import p13 from "./images/p13.png";
import p14 from "./images/p14.jpg";
import p15 from "./images/p15.jpg";
import p16 from "./images/p16.jpg";
import p17 from "./images/p17.jpg"
import p18 from "./images/p18.jpg";
import footer from "./images/footer.png";
import navlogo from "./images/navlogo.png";
import video from "./images/video1.mp4";
import { FaCalendar, FaClock, FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
const photoArray = [
  p1, p2, p3, p4, p5, p6, p8, p9, p10, p11, p12, p13
];



export default function Appointmentpage() {
  const [language, setLanguage] = useState("English");
  const [open, setOpen] = useState(false);

  const galleryRef = useRef(null);

//   const scrollGallery = (direction) => {
//     if (!galleryRef.current) return;

//     galleryRef.current.scrollBy({
//       left: direction,
//       behavior: "smooth",
//     });
//   };


  return (
    <>
     
      <div className="top-gradient-section">
     
        <header className="glass-header">
          <div className="header-container">
            <div className="logo">
           

 <img 
      className="navlogo"  src={navlogo} 
        alt="dar logo" 
      />

            </div>

            <nav>
              <ul>
                <li><a href="#">About us</a></li>
              <li><a href="/project">Projects</a></li>
                <li><a href="/catalogue">Catalogue</a></li>
                <li><a href="#">Appointment</a></li>
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

              <a href="#" className="auth-link">
                Login / Sign Up
              </a>

              <a href="#" className="btn-platform">
                Go to DAR Platform <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </header>

      
        <section className="hero">
          <div className="trust-badge">
            <FontAwesomeIcon icon={faStar} className="star-icon"/>
            1200+ trusted customers
          </div>

          <h1>
            Design It Yourself And Control <br />
            The Price
          </h1>

          <p className="description">
            Experience Kuwait's first interactive 3D configurator.
            Customize finishes, set room dimensions,
            and see real-time pricing before you book.
          </p>

          <div className="buttons">
            <button className="btn-outline">
              Book Measurements ↗
            </button>
            <button className="btn-primary">
              Go to DAR Platform ↗
            </button>
          </div>

          <div className="image-slider">
            {[p1, p2, p3, p4, p5, p6, p8, p9].map((img, i) => (
              <img src={img} alt={`slide-${i}`} key={i} />
            ))}
          </div>
        </section>
      </div>
      
      <section className="book-section">
   

      <p className="book-topline">Book your appointment</p>
      <h2 className="book-title">
        Choose a date and time that works best for you. Our team will confirm your
        appointment and guide you through the next steps.
      </h2>

      <div className="book-card">
     
        <h4 className="section-title">Personal Info</h4>
        <div className="grid-2">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Phone number" />
          <input type="email" placeholder="Email address" />
        </div>

    
        <h4 className="section-title">Appointment Details</h4>

        <div className="tabs">
          <button className="tab">Design Consultation</button>
          <button className="tab active">Measurements</button>
          <button className="tab">Project Follow-Up</button>
          <button className="tab">Other</button>
        </div>

        <div className="grid-2">
          <div className="input-icon">
            <FaCalendar /> <input type="date" />
          </div>
          <div className="input-icon">
            <FaClock /> <input type="time" />
          </div>

          <div className="input-icon">
            <FaMapMarkerAlt /> <input type="text" placeholder="Address" />
          </div>
          <input type="text" placeholder="ZIP Code" />

          <textarea
            placeholder="Share any details about your project or requirements"
            className="details-area"
          ></textarea>
        </div>

        <button className="btn-submit">Book Appointment ↗</button>
      </div>
    </section>
      
    <section className="meet-team-section">
      <div className="meet-team-header">
        <p className="meet-team-eyebrow">MEET OUR TEAM</p>
        <h2 className="meet-team-title">
          We are a passionate team of designers <br />
          dedicated to transforming your vision <br />
          into beautifully crafted spaces.
        </h2>
      </div>



      <div className="department-tabs">
        <button className="department-tab active">Management</button>
        <button className="department-tab">IT Department</button>
        <button className="department-tab">HR Department</button>
        <button className="department-tab">Marketing</button>
        <button className="department-tab">Legal Department</button>
      </div>

    </section>

    
    <div className="team-members-container">
          {/* Top Row: 4 Members */}
          <div className="team-grid top-row">
            <div className="team-card">
              <img src={p14} alt="Sarah" />
              <div className="team-overlay">
                <h3 className="team-name">Sarah</h3>
                <p className="team-role">Operations Manager</p>
              </div>
            </div>
    
            <div className="team-card">
              <img src={p15} alt="James" />
              <div className="team-overlay">
                <h3 className="team-name">James</h3>
                <p className="team-role">Head of Marketing</p>
              </div>
            </div>
    
            <div className="team-card">
              <img src={p16} alt="Emily" />
              <div className="team-overlay">
                <h3 className="team-name">Emily</h3>
                <p className="team-role">CFO</p>
              </div>
            </div>
    
            <div className="team-card">
              <img src={p18} alt="Michael" />
              <div className="team-overlay">
                <h3 className="team-name">Michael</h3>
                <p className="team-role">Head Designer</p>
              </div>
            </div>
          </div>
    
          {/* Bottom Mixed Row: Member + Highlight + Member */}
          <div className="team-grid bottom-row">
            <div className="team-card">
              <img src={p18} alt="James" />
              <div className="team-overlay">
                <h3 className="team-name">James</h3>
                <p className="team-role">Accountant</p>
              </div>
            </div>
    
            <div className="highlight-card">
              <div className="highlight-icon">👥</div>
              <p className="highlight-text">
                DAR is powered by a team of <strong>50+</strong> professionals across design, operations,
                customer service, marketing, HR, finance, and production.
              </p>
            </div>
    
            <div className="team-card">
              <img src={p14} alt="Sarah" />
              <div className="team-overlay">
                <h3 className="team-name">Sarah</h3>
                <p className="team-role">Legal Head</p>
              </div>
            </div>
          </div>
        </div>
    
    
    



<section className="hero-section">
    <img src={p5} alt="" className="hero-img" />
  <div className="hero-content">
    <p className="hero-subheading">Crafting Environments</p>
    <p className="hero-main-text">
      It is so <span className="highlight">Easy</span> to <span className="highlight">Change</span> the <span className="highlight">mood</span>
    </p>
    <button className="btn-book-measurements">
      Book Measurements <span className="arrow">→</span>
    </button>
  </div>
</section>








<footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={footer} alt="DAR Logo" className="footer-logo"/>
          <p>support@dar.com</p>
          <p>+965 1234 6584</p>
          <p>+92 1234 5678</p>
        </div>

        <div className="footer-middle">
          <div className="footer-links">
            <h4>Pages</h4>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Catalogue</li>
              <li>Projects</li>
              <li>Appointments</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        <div className="footer-right">
          <div className="newsletter-card">
            <img src={p1} alt="Newsletter"/>
            <div className="newsletter-text">
              <h4>Subscribe to Our Newsletter</h4>
              <p>Lorem ipsum dolor sit amet consectetur. Duis scelerisque cursus nisl amet in. Habitant nullam nam bibendum consequat.</p>
            </div>
            <span className="arrow">→</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
     <div className="social-icons">
  <FaInstagram />
  <FaFacebookF />
  <FaTwitter /> 
  <FaYoutube />
  <FaWhatsapp />
</div>
        <p>Copyright © 2025 Dar. All rights reserved.</p>
      </div>
    </footer>


    </>
  );
}