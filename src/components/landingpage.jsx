import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./landingpage.css";
import { FaWhatsapp, FaUsers } from "react-icons/fa";
import Footer from "./Footer";
import './what.css'

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
import head from "./images/head.jpeg";
import Accountant from "./images/Account.jpeg";
import design from "./images/headesigner.jpeg";
import marketing from "./images/market.jpeg";
// Video
import video from "../assets/video.mp4";

const photoArray = [
  p1, p2, p3, p4, p5, p6, p8, p9, p10, p11, p12, p13
];

export default function Landingpage() {
  const message = "Hello, I want to get more information.";
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const steps = [
    { number: 1, title: t('aboutPage.bookingSteps.step1.title'), description: t('aboutPage.bookingSteps.step1.desc') },
    { number: 2, title: t('aboutPage.bookingSteps.step2.title'), description: t('aboutPage.bookingSteps.step2.desc') },
    { number: 3, title: t('aboutPage.bookingSteps.step3.title'), description: t('aboutPage.bookingSteps.step3.desc') },
    { number: 4, title: t('aboutPage.bookingSteps.step4.title'), description: t('aboutPage.bookingSteps.step4.desc') },
    { number: 5, title: t('aboutPage.bookingSteps.step5.title'), description: t('aboutPage.bookingSteps.step5.desc') },
    { number: 6, title: t('aboutPage.bookingSteps.step6.title'), description: t('aboutPage.bookingSteps.step6.desc') },
  ];

  const careerCards = Array(9).fill({
    title: t('aboutPage.careersTitle'),
    description: t('aboutPage.careersDesc')
  });


  const handleBook = () => {
    navigate("/appointment#measurement-section");
  };

  const handlePlatform = () => {
    window.open("https://platform.dar-kuwait.com/", "_blank");
  };

  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    if (!galleryRef.current) return;

    galleryRef.current.scrollBy({
      left: direction,
      behavior: "smooth",
    });
  };


  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

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
      {/* ===============================
          GRADIENT SECTION (NAV + HERO)
      =============================== */}
      <div className="top-gradient-section">
        {/* HEADER */}
        <Navbar />






        {/* HERO */}
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

      {/* DAR SECTION */}


      <div className="space-section">
        <div className="space-actions">
          <button className="action-btn" onClick={handleBook}><span className="icon-circle">👤</span>{t('landingPage.bookCrew')}</button>
          <button className="action-btn" onClick={handleBook}><span className="icon-circle">📏</span>{t('landingPage.bookMeasurements')}</button>
          <button className="action-btn"><span className="icon-circle">📦</span>{t('landingPage.trackOrder')}</button>
        </div>
        <div className="space-banner">
          <div className="space-text">
            <h2>{t('landingPage.designWayTitle')}</h2>
            <p>{t('landingPage.designWayDesc')}</p>
            <button className="space-cta" onClick={handlePlatform}>{t('landingPage.goToPlatform')} <span>↗</span></button>
          </div>
          <div className="space-logo">
            <img src={logo} alt="DAR" />
          </div>
        </div>
      </div>

      {/* JOURNEY */}
      <section className="journey">
        <div className="journey-header">
          <span className="journey-tag">{t('aboutPage.journeyTag')}</span>
          <h2>
            {t('aboutPage.journeyTitle')}
          </h2>
        </div>

        <div className="journey-content">
          <div className="timeline">

            <div className="timeline-item">
              <div className="dot"></div>
              <h3>{t('aboutPage.journeyItems.2020.title')}</h3>
              <p>{t('aboutPage.journeyItems.2020.desc')}</p>
            </div>

            <div className="timeline-item">
              <div className="dot"></div>
              <h3>{t('aboutPage.journeyItems.2021.title')}</h3>
              <p>{t('aboutPage.journeyItems.2021.desc')}</p>
            </div>

            <div className="timeline-item">
              <div className="dot"></div>
              <h3>{t('aboutPage.journeyItems.2022.title')}</h3>
              <p>{t('aboutPage.journeyItems.2022.desc')}</p>
            </div>

          </div>

          <div className="journey-image">
            <img src={p5} alt="Journey" />
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="demo-section">
        <h2>{t('landingPage.demoTitle')}</h2>
        <video
          className="demo-video"
          autoPlay
          loop
          playsInline
          controls
          preload="auto"
        >
          <source src={video} type="video/mp4" />
          {t('aboutPage.journeyItems.2022.desc')}
        </video>
      </section>

      {/* SHOWCASE */}
      <div className="showcase-container">
        <div className="showcase-header">
          <h1>{t('landingPage.showcaseTitle')}</h1>
          <div className="scroll-buttons">
            <button onClick={() => scrollGallery(-300)}>←</button>
            <button onClick={() => scrollGallery(300)}>→</button>
          </div>
        </div>

        <div className="gallery-wrapper">
          <div className="scroll-gallery" ref={galleryRef}>
            {photoArray.map((src, index) => (
              <div className="project-card" key={index}>
                <img src={src} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="book-wrapper">
          <button className="book-button" onClick={handleBook}>{t('landingPage.bookCrew')} →</button>
        </div>
      </div>

      {/* WHY CHOOSE DAR */}
      <section className="why">
        <p className="eyebrow">{t('landingPage.whyChoose.eyebrow')}</p>

        <h2 className="title">
          {t('landingPage.whyChoose.title')}
        </h2>

        <div className="grid">
          <div className="card">
            <div className="icon">💰</div>
            <h3>{t('landingPage.whyChoose.transparentTitle')}</h3>
            <p>
              {t('landingPage.whyChoose.transparentDesc')}
            </p>
          </div>

          <div className="card center">
            <div className="icon">⚡</div>
            <h3>{t('landingPage.whyChoose.fasterTitle')}</h3>
            <p>
              {t('landingPage.whyChoose.fasterDesc')}
            </p>
          </div>

          <div className="card">
            <div className="icon">📊</div>
            <h3>{t('landingPage.whyChoose.trackTitle')}</h3>
            <p>
              {t('landingPage.whyChoose.trackDesc')}
            </p>
          </div>

          <div className="card">
            <div className="icon">🛠️</div>
            <h3>{t('landingPage.whyChoose.designWayTitle')}</h3>
            <p>
              {t('landingPage.whyChoose.designWayDesc')}
            </p>
          </div>

          <div className="card">
            <div className="icon">🚚</div>
            <h3>{t('landingPage.whyChoose.trustedTitle')}</h3>
            <p>
              {t('landingPage.whyChoose.trustedDesc')}
            </p>
          </div>
          <div className="card">
            <div className="icon">🚚</div>
            <h3>{t('landingPage.whyChoose.trustedTitle')}</h3>
            <p>
              {t('landingPage.whyChoose.trustedDesc')}
            </p>
          </div>

        </div>
      </section>


      {/* ===============================
    DAR CATALOGUE SECTION
============================== */}
      <section className="catalogue-section">
        <div className="catalogue-header">
          <p className="catalogue-eyebrow">{t('journey.subtitle')}</p>
          <h2 className="catalogue-title">{t('common.catalogue')}</h2>

          <div className="catalogue-nav-arrows">
            <button className="arrow-btn left-arrow">←</button>
            <button className="arrow-btn right-arrow active">→</button>
          </div>
        </div>

        <div className="catalogue-grid">
          {/* Card 1 - Sweden Melody */}
          <div className="catalogue-card">
            <img
              src={p10} // Replace with your actual image if different
              alt="Sweden Melody interior"
            />
            <div className="card-content">
              <h3 className="card-title">{t('projectPage.projects.sweden.title')}</h3>
              <p className="card-location">{t('projectPage.projects.sweden.location')}</p>
              <p className="card-year">2019</p>
            </div>
          </div>

          {/* Card 2 - Modern Mix */}
          <div className="catalogue-card">
            <img
              src={p11} // Replace with your actual image if different
              alt="Modern Mix interior"
            />
            <div className="card-content">
              <h3 className="card-title">{t('projectPage.projects.modern.title')}</h3>
              <p className="card-location">{t('projectPage.projects.modern.location')}</p>
              <p className="card-year">2021</p>
            </div>
          </div>

          {/* Card 3 - Airy Cave */}
          <div className="catalogue-card">
            <img
              src={p12} // Replace with your actual image if different
              alt="Airy Cave interior"
            />
            <div className="card-content">
              <h3 className="card-title">{t('projectPage.projects.airy.title')}</h3>
              <p className="card-location">{t('projectPage.projects.airy.location')}</p>
              <p className="card-year">2023</p>
            </div>
          </div>
        </div>

        <div className="catalogue-cta">
          <button className="btn-catalogue" onClick={() => navigate("/catalogue")}>
            {t('cataloguePage.viewCatalogue')} →
          </button>
        </div>
      </section>



      <section className="tech-section">
        <p className="tech-eyebrow">{t('landingPage.tech.eyebrow')}</p>

        <h1 className="tech-heading">
          {t('landingPage.tech.heading')}
        </h1>

        <div className="tech-wrapper">
          {/* LEFT CONTENT */}
          <div className="tech-left">
            <h2 className="tech-title">
              {t('landingPage.tech.title')}
              <span>{t('landingPage.tech.updates')}</span>
              <span>{t('landingPage.tech.process')}</span>
            </h2>

            <p className="tech-desc">
              {t('landingPage.tech.desc')}
            </p>

            <p className="tech-highlight">
              {t('landingPage.tech.highlight')}
            </p>

            <div className="tech-bg-text">{t('landingPage.tech.bgText')}</div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="tech-right">
            <img
              src={p3}
              alt="3D Furniture Room"
            />
          </div>
        </div>
      </section>



      {/* ===============================
    HOW IT WORKS SECTION - EXACT MATCH
============================== */}


      <section className="how-it-works">
        <div className="containers ">
          <p className="section-subtitle">{t('aboutPage.journeyTag')}</p>
          <h2 className="section-title">
            {t('aboutPage.impactText')}
          </h2>

          <div className="steps-grid">
            {steps.map((step) => (
              <div className="step-card" key={step.number}>
                <div className="step-header">
                  <span className="step-number">{step.number}</span>
                  <span className="step-title">{step.title}</span>
                </div>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="meet-team-section">
        <div className="meet-team-header">
          <p className="meet-team-eyebrow">{t('aboutPage.teamEyebrow')}</p>
          <h2 className="meet-team-title">
            {t('aboutPage.teamTitle')}
          </h2>
        </div>

        <div className="department-tabs">
          <button className="department-tab active">{t('aboutPage.departments.management')}</button>
          <button className="department-tab">{t('aboutPage.departments.it')}</button>
          <button className="department-tab">{t('aboutPage.departments.hr')}</button>
          <button className="department-tab">{t('aboutPage.departments.marketing')}</button>
          <button className="department-tab">{t('aboutPage.departments.legal')}</button>
        </div>

      </section>




      <div className="team-members-container">
        {/* Top Row: 4 Members */}
        <div className="team-grid top-row">
          <div className="team-card">
            <img src={head} alt="Head" />
            <div className="team-overlay">
              <h3 className="team-name">{t('aboutPage.teamRoles.head')}</h3>
              <p className="team-role"></p>
            </div>
          </div>

          <div className="team-card">
            <img src={Accountant} alt="James" />
            <div className="team-overlay">
              <h3 className="team-name">{t('aboutPage.teamRoles.accountant')}</h3>
              <p className="team-role"></p>
            </div>
          </div>

          <div className="team-card">
            <img src={design} alt="Emily" />
            <div className="team-overlay">
              <h3 className="team-name">{t('aboutPage.teamRoles.designer')}</h3>
              <p className="team-role"></p>
            </div>
          </div>

          <div className="team-card">
            <img src={marketing} alt="Michael" />
            <div className="team-overlay">
              <h3 className="team-name">{t('aboutPage.teamRoles.pr')}</h3>
              <p className="team-role"></p>
            </div>
          </div>
        </div>

        {/* Bottom Mixed Row: Member + Highlight + Member */}
        <div className="team-grid bottom-row">

          <div className="highlight-card">
            <div className="highlight-icon"><FaUsers /></div>
            <p className="highlight-text">
              {t('aboutPage.teamHighlight')}
            </p>
          </div>


        </div>
      </div>



      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-left">
            <p className="testimonial-header">{t('aboutPage.testimonials.header')}</p>
            <p className="testimonial-description">
              {t('aboutPage.testimonials.description')}
            </p>
            <div className="client-info">
              <img src={p14} alt="Client" className="client-image" />
              <div className="client-details">
                <p className="client-name">{t('aboutPage.testimonials.clientName')}</p>
                <p className="client-title">{t('aboutPage.testimonials.clientRole')}</p>
              </div>
            </div>
          </div>
          <div className="testimonial-right">
            <div className="testimonial-quote">
              <span className="quote-mark">"</span>
              <p className="testimonial-text">
                {t('aboutPage.testimonials.quote')}
              </p>
            </div>
            <p className="testimonial-feedback">
              {t('aboutPage.testimonials.feedback')}
            </p>
            <div className="testimonial-arrows">
              <button className="arrow-left">←</button>
              <button className="arrow-right">→</button>
            </div>
          </div>
        </div>
      </section>



      <section className="hero-section">
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



      <section className="careers-section">
        <div className="careers-left">
          <span className="subtitle">{t('aboutPage.careersSub')}</span>
          <h2>{t('aboutPage.careersTitle')}</h2>
          <p>
            {t('aboutPage.careersDesc')}
          </p>
          <div className="arrow-buttons">
            <button onClick={() => scroll("left")}>←</button>
            <button onClick={() => scroll("right")}>→</button>
          </div>
        </div>

        <div className="careers-right" ref={scrollRef}>
          {careerCards.map((card, idx) => (
            <div className="career-card" key={idx}>
              <h3>{t('aboutPage.careersTitle')}</h3>
              <p>{t('aboutPage.careersDesc')}</p>
              <button className="apply-btn">{t('aboutPage.applyNow')} →</button>
            </div>
          ))}
        </div>
      </section>




      <Footer />


    </>
  );
}