import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./project.css";
// Images
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
import Navbar from "./Navbar";
// Video
import video from "./images/video1.mp4";

const photoArray = [
  p1, p2, p3, p4, p5, p6, p8, p9, p10, p11, p12, p13
];

const items = [
  { img: p1, title: "Sweden melody", location: "Paris, France", year: "2019" },
  { img: p2, title: "Modern mix", location: "Madrid, Spain", year: "2020" },
  { img: p3, title: "Airy cave", location: "Amsterdam, Netherlands", year: "2021" },
  { img: p4, title: "Echoes of the fjords", location: "Oslo, Norway", year: "2022" },
  { img: p5, title: "Ambient beats", location: "Lisbon, Portugal", year: "2023" },
  { img: p6, title: "Rhythmic tides", location: "Copenhagen, Denmark", year: "2024" },
  { img: p3, title: "Ocean Vibes", loc: "Dubai, UAE", year: "2024" },
  { img: p8, title: "Desert Harmony", loc: "Riyadh, Saudi Arabia", year: "2025" },
  { img: p1, title: "Zen Garden Home", loc: "Tokyo, Japan", year: "2023" },
];

import { useTranslation } from "react-i18next";

export default function Projectpage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/appointment#measurement-section");
  };

  const handlePlatform = () => {
    window.open("https://platform.dar-kuwait.com/", "_blank");
  };

  const galleryRef = useRef(null);

  //   const scrollGallery = (direction) => {
  //     if (!galleryRef.current) return;

  //     galleryRef.current.scrollBy({
  //       left: direction,
  //       behavior: "smooth",
  //     });
  //   };
 const message = "Hello, I want to get more information.";

  return (
    <>
    <a
     href={`https://wa.me/96555559585?text=${encodeURIComponent(message)}`}
         
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>
      <div className="top-gradient-section">
        <Navbar />



        <section className="hero">
          <div className="trust-badge">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            {t('hero.trustBadge')}
          </div>

          <h1 style={{ whiteSpace: 'pre-line' }}>
            {t('hero.title')}
          </h1>

          <p className="description">
            {t('hero.description')}
          </p>

          <div className="buttons">
            <button className="btn-outline" onClick={handleBook}>
              {t('hero.bookMeasurements')} ↗
            </button>
            <button className="btn-primary" onClick={handlePlatform}>
              {t('hero.goToPlatform')} ↗
            </button>
          </div>

          <div className="image-slider">
            {[p1, p2, p3, p4, p5, p6, p8, p9].map((img, i) => (
              <img src={img} alt={`slide-${i}`} key={i} />
            ))}
          </div>
        </section>
      </div>




      <section className="journey-stats">
        <div className="stats-top">
          <span className="tag">{t('journey.tag')}</span>
          <p className="stats-heading">
            {t('journey.heading')}
          </p>
        </div>

        <div className="stats-row">
          <div className="stats-row">
            <div className="stat up">
              <h2>250+</h2>
              <h4>{t('journey.completed')}</h4>
              <p>{t('journey.completedDesc')}</p>
              <img src={p1} alt="" />
            </div>

            <span className="divider"></span>

            <div className="stat down">
              <h2>200+</h2>
              <h4>{t('journey.old')}</h4>
              <p>{t('journey.oldDesc')}</p>
              <img src={p2} alt="" />
            </div>

            <span className="divider"></span>

            <div className="stat up">
              <h2>150+</h2>
              <h4>{t('journey.current')}</h4>
              <p>{t('journey.currentDesc')}</p>
              <img src={p3} alt="" />
            </div>

            <span className="divider"></span>

            <div className="stat down">
              <h2>90+</h2>
              <h4>{t('journey.awaiting')}</h4>
              <p>{t('journey.awaitingDesc')}</p>
              <img src={p4} alt="" />
            </div>
          </div>
        </div>

        <div className="cta-row">
          <button className="btn-view">{t('journey.viewProjects')} ↗</button>
          <span className="slots">● {t('journey.slots')}</span>
        </div>
      </section>

      <section className="showcase">
        <p className="small-title">WHAT WE PROUD OF</p>
        <h2 className="big-title">DAR Projects Showcase<span className="line"></span></h2>

        <div className="grid">
          {items.map((p, i) => (
            <div
              className={`card ${i % 3 === 1 ? "small" : "big"}`}
              key={i}
            >
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
              <p className="loc">{p.location}</p>
              <p className="year">{p.year}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="pagination-section">
        <div className="pagination">
          <button>&lt;</button>
          <button className="active">3</button>
          <button>4</button>
          <button>…</button>
          <button>8</button>
          <button>&gt;</button>
        </div>

        <button className="book-btn">
          Book DAR Crew ↗
        </button>
      </div>


      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-left">
            <p className="testimonial-header">OUR CLIENTS SAY</p>
            <p className="testimonial-description">
              The warm words of our clients let us achieve more
            </p>
            <div className="client-info">
              <img src={p14} alt="Client" className="client-image" />
              <div className="client-details">
                <p className="client-name">Morgan Dufresne</p>
                <p className="client-title">Company Owner</p>
              </div>
            </div>
          </div>
          <div className="testimonial-right">
            <div className="testimonial-quote">
              <span className="quote-mark">"</span>
              <p className="testimonial-text">
                From concept to reality, DAR turned my vision into a stunning, livable
                space. I couldn’t be happier with this!
              </p>
            </div>
            <p className="testimonial-feedback">
              Morgan wanted a modern, functional office. We delivered a bright, stylish
              space with smart design solutions, perfectly tailored to his company
              style.
            </p>
            <div className="testimonial-arrows">
              <button className="arrow-left">←</button>
              <button className="arrow-right">→</button>
            </div>
          </div>
        </div>
      </section>




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
            <img src={footer} alt="DAR Logo" className="footer-logo" />
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
              <img src={p1} alt="Newsletter" />
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