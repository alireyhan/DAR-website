import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./catalogue.css";
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



import { useTranslation } from "react-i18next";

export default function Cataloguepage() {
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


  return (
    <>

      <div className="top-gradient-section">
        <Navbar />





        <section className="hero">
          <div className="trust-badge">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
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
          <span className="tag">The Journey So Far</span>
          <p className="stats-heading">
            With years of expertise and innovation, DAR continues <br />
            to deliver premium, custom furniture experiences that <br />
            transform spaces and build lasting trust with our clients.
          </p>
        </div>

        <div className="stats-row">
          <div className="stats-row">
            <div className="stat up">
              <h2>250+</h2>
              <h4>Completed Projects</h4>
              <p>Successfully delivered projects</p>
              <img src={p1} alt="" />
            </div>

            <span className="divider"></span>

            <div className="stat down">
              <h2>200+</h2>
              <h4>Old</h4>
              <p>Over a decade of design expertise</p>
              <img src={p2} alt="" />
            </div>

            <span className="divider"></span>

            <div className="stat up">
              <h2>150+</h2>
              <h4>Current</h4>
              <p>Projects in progress with precision</p>
              <img src={p3} alt="" />
            </div>

            <span className="divider"></span>

            <div className="stat down">
              <h2>90+</h2>
              <h4>Awaiting Delivery</h4>
              <p>Ready to be delivered soon</p>
              <img src={p4} alt="" />
            </div>
          </div>
        </div>

        <div className="cta-row">
          <button className="btn-view">View DAR Projects ↗</button>
          <span className="slots">● Slots are available</span>
        </div>
      </section>



      <section className="dar-catalogue">
        <p className="catalogue-subtitle">WHAT WE PROUD OF</p>
        <h2 className="catalogue-title">DAR Catalogue</h2>

        <div className="catalogue-layout">


          <div className="left-big">
            <img src={p1} alt="Living Area" />
            <p className="img-label">Living Area</p>
          </div>


          <div className="right-small">
            <div className="small-item">
              <img src={p2} alt="Master Bedroom" />
              <p className="img-label">Master Bedroom</p>
            </div>


          </div>
        </div>
      </section>


      <section className="dar-catalogue-block">
        <div className="block-layout">


          <div className="left-small">
            <img src={p3} alt="Kids Bedroom" />
            <p className="img-label">Kids Bedroom</p>
          </div>


          <div className="right-big">
            <img src={p4} alt="Kitchen" />
            <p className="img-label">Kitchen</p>
          </div>

        </div>
      </section>


      <section className="dar-catalogue">
        <p className="catalogue-subtitle">WHAT WE PROUD OF</p>
        <h2 className="catalogue-title">DAR Catalogue</h2>

        <div className="catalogue-layout">


          <div className="left-big">
            <img src={p1} alt="Living Area" />
            <p className="img-label">Living Area</p>
          </div>


          <div className="right-small">
            <div className="small-item">
              <img src={p2} alt="Master Bedroom" />
              <p className="img-label">Master Bedroom</p>
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