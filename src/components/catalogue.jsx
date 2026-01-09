import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { FaWhatsapp } from "react-icons/fa";
import Footer from "./Footer";
import "./catalogue.css";
// Images
import './what.css'

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
import video from "../assets/video.mp4";

const photoArray = [
  p1, p2, p3, p4, p5, p6, p8, p9, p10, p11, p12, p13
];



import { useTranslation } from "react-i18next";

export default function Cataloguepage() {
  const message = "Hello, I want to get more information.";
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
      <a
        href={`https://wa.me/96565964302?text=${encodeURIComponent(message)}`}

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
            {t('appointmentPage.trustBadge')}
          </div>

          <h1>
            {t('appointmentPage.heroTitle')}
          </h1>

          <p className="description">
            {t('appointmentPage.heroDesc')}
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
          <button className="btn-view" onClick={() => navigate("/project")}>{t('journey.viewProjects')} ↗</button>
          <span className="slots">● {t('journey.slots')}</span>
        </div>
      </section>



      <section className="dar-catalogue">
        <p className="catalogue-subtitle">{t('journey.subtitle')}</p>
        <h2 className="catalogue-title">{t('common.catalogue')}</h2>

        <div className="catalogue-layout">


          <div className="left-big">
            <img src={p1} alt={t('cataloguePage.rooms.living')} />
            <p className="img-label">{t('cataloguePage.rooms.living')}</p>
          </div>


          <div className="right-small">
            <div className="small-item">
              <img src={p2} alt={t('cataloguePage.rooms.master')} />
              <p className="img-label">{t('cataloguePage.rooms.master')}</p>
            </div>


          </div>
        </div>
      </section>


      <section className="dar-catalogue-block">
        <div className="block-layout">


          <div className="left-small">
            <img src={p3} alt="Kids Bedroom" />
            <p className="img-label">{t('cataloguePage.rooms.kids')}</p>
          </div>


          <div className="right-big">
            <img src={p4} alt="Kitchen" />
            <p className="img-label">{t('cataloguePage.rooms.kitchen')}</p>
          </div>

        </div>
      </section>


      <section className="dar-catalogue">
        <p className="catalogue-subtitle">{t('journey.subtitle')}</p>
        <h2 className="catalogue-title">{t('common.catalogue')}</h2>

        <div className="catalogue-layout">


          <div className="left-big">
            <img src={p1} alt={t('cataloguePage.rooms.living')} />
            <p className="img-label">{t('cataloguePage.rooms.living')}</p>
          </div>


          <div className="right-small">
            <div className="small-item">
              <img src={p2} alt={t('cataloguePage.rooms.master')} />
              <p className="img-label">{t('cataloguePage.rooms.master')}</p>
            </div>


          </div>
        </div>
      </section>


      <section className="hero-section">
        <img src={p5} alt="" className="hero-img" />
        <div className="hero-content">
          <p className="hero-subheading">{t('hero.crafting')}</p>
          <p className="hero-main-text">
            {t('hero.easyChange')}
          </p>
          <button className="btn-book-measurements" onClick={handleBook}>
            {t('hero.bookMeasurements')} <span className="arrow">→</span>
          </button>
        </div>
      </section>








      <Footer />


    </>
  );
}