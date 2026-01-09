

import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import "./about.css";
import './what.css'
import { FaWhatsapp, FaUsers } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
import IMG from "./images/IMG.png"
import p18 from "./images/p18.jpg";
import footer from "./images/footer.png";
import navlogo from "./images/navlogo.png";
import logo2 from "./images/logo2.png";
import Container from "./images/Container.png";
import video from "../assets/video.mp4";
import ball from "./images/ball.png";
import pin from "./images/pin.png";
import star from "./images/star.png";
import couch from "./images/couch.png";
import head from "./images/head.jpeg";
import Accountant from "./images/Account.jpeg";
import design from "./images/headesigner.jpeg";
import marketing from "./images/market.jpeg";
const photoArray = [
  p1, p2, p3, p4, p5, p6, p8, p9, p10, p11, p12, p13
];

export default function Aboutpage() {
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


      <section className="fh-wrap">
        {/* Left image */}
        <div className="fh-card fh-image">
          <img src={p4} alt="Left" />
        </div>

        {/* Middle stats card */}
        <div className="fh-card fh-stats">
          <div className="fh-statsTop">
            <p className="fh-small">
              {t('aboutPage.mission1')}
            </p>

            <div className="fh-big">94%</div>
          </div>

          <div className="fh-statsBottom">
            <p className="fh-small fh-small--light">
              {t('aboutPage.mission2')}
            </p>

            <div className="fh-big fh-big--light">200+</div>
          </div>
        </div>

        {/* Right image */}
        <div className="fh-card fh-image">
          <img src={p1} alt="Right" />
        </div>
      </section>



      <section class="dar">
        <div class="dar-inner">
          <div class="dar-circle">
            <img class="dar-logo" src={logo2} alt="DAR Logo" />
          </div>

          <div class="dar-content">
            <div class="dar-brand">DAR</div>

            <h1 class="dar-title">
              {t('aboutPage.journeyTitle')}
            </h1>

            <p class="dar-desc">
              {t('aboutPage.impactText')}
            </p>
          </div>
        </div>
      </section>


      <section class="ourstory">
        <div class="ourstory__wrap">


          <div class="ourstory__left">
            <div class="ourstory__top">
              <div class="ourstory__kicker">{t('aboutPage.storyKicker')}</div>

              <h2 class="ourstory__title">{t('aboutPage.storyTitle')}</h2>

              <p class="ourstory__desc">
                {t('aboutPage.storyDesc')}
              </p>
            </div>

            <div class="ourstory__bottom">
              <div class="ourstory__line"></div>

              <div class="ourstory__stats">
                <div class="ourstory__stat">
                  <div class="ourstory__num">240+</div>
                  <div class="ourstory__label">{t('aboutPage.storyStats.designs')}</div>
                </div>

                <div class="ourstory__stat">
                  <div class="ourstory__num">100%</div>
                  <div class="ourstory__label">{t('aboutPage.storyStats.precision')}</div>
                </div>

                <div class="ourstory__stat">
                  <div class="ourstory__num">2020</div>
                  <div class="ourstory__label">{t('aboutPage.storyStats.since')}</div>
                </div>
              </div>
            </div>
          </div>


          <div className="ourstory__right">
            <div className="ourstory__media">
              <video
                className="ourstory__video"
                src={video}
                autoPlay
                loop
                playsInline
                preload="auto"
                controls
              />
            </div>
          </div>
        </div>
      </section>

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



      {/*pic and black section*/}

      <section className="impact">

        <div className="impact-hero">
          <img className="impact-img" src={Container} alt="Impact" />
        </div>

        {/* BOTTOM DARK AREA */}
        <div className="impact-bottom">
          <div className="impact-inner">
            <div className="impact-left">
              <p className="impact-kicker">{t('aboutPage.impactKicker')}</p>
            </div>

            <div className="impact-right">
              <p className="impact-text">
                {t('aboutPage.impactText')}
              </p>

              <div className="impact-bracket"></div>

              <div className="impact-stats">
                <div className="impact-stat">
                  <h3 className="impact-num">{t('aboutPage.impactStats.first')}</h3>
                  <p className="impact-label">{t('aboutPage.impactStats.inKuwait')}</p>
                </div>

                <div className="impact-divider"></div>

                <div className="impact-stat">
                  <h3 className="impact-num">250+</h3>
                  <p className="impact-label">{t('aboutPage.impactStats.projectsCompleted')}</p>
                </div>

                <div className="impact-divider"></div>

                <div className="impact-stat">
                  <h3 className="impact-num">40+</h3>
                  <p className="impact-label">{t('aboutPage.impactStats.teamMembers')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>








      <section className="sf">
        <div className="sf-wrap">
          {/* LEFT */}
          <div className="sf-col">
            <div className="sf-box">
              <div className="sf-icon"><img src={pin} /></div>
              <h3 className="sf-title">{t('aboutPage.features.personalTitle')}</h3>
              <p className="sf-text">
                {t('aboutPage.features.personalDesc')}
              </p>
            </div>


            <div className="sf-box">
              <div className="sf-icon"><img src={star} /></div>
              <h3 className="sf-title">{t('aboutPage.features.craftedTitle')}</h3>
              <p className="sf-text">
                {t('aboutPage.features.craftedDesc')}
              </p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="sf-center">
            {/* replace src with your image */}
            <img className="sf-img" src={IMG} alt="Your" />
          </div>

          {/* RIGHT */}
          <div className="sf-col">
            <div className="sf-box">
              <div className="sf-icon"><img src={ball} /></div>
              <h3 className="sf-title">{t('aboutPage.features.clarityTitle')}</h3>
              <p className="sf-text">
                {t('aboutPage.features.clarityDesc')}
              </p>
            </div>


            <div className="sf-box">
              <div className="sf-icon"><img src={couch} /></div>
              <h3 className="sf-title">{t('aboutPage.features.livingTitle')}</h3>
              <p className="sf-text">
                {t('aboutPage.features.livingDesc')}
              </p>
            </div>
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