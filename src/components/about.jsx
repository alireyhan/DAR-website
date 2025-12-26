

import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./about.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

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
import video from "./images/video1.mp4";
import ball from "./images/ball.png";
import pin from "./images/pin.png";
import star from "./images/star.png";
import couch from "./images/couch.png";
const photoArray = [
  p1, p2, p3, p4, p5, p6, p8, p9, p10, p11, p12, p13
];

const steps = [
  { number: 1, title: "Booking Phase", description: "Schedule a visit or start designing online to begin your furniture journey of your own design and style." },
  { number: 2, title: "Measurement Phase", description: "Our team measures your space to ensure your desired furniture is a perfect fit." },
  { number: 3, title: "Design Phase", description: "Use the DAR platform to design in 3D, customize materials, and see live pricing." },
  { number: 4, title: "Approval Phase", description: "Review the design, confirm details, and get instant cost transparency. No hidden fees or costs." },
  { number: 5, title: "Production Phase", description: "Your design is crafted with high-quality materials and are crafted by expert workmanship." },
  { number: 6, title: "Delivery & Installation", description: "DAR delivers and installs your furniture, for you at your doorstep, ready to use hassle free." },
];

const careerCards = [
  {
    title: "Design And Interactions",
    description: "Lorem ipsum dolor sit amet consectetur. Sociis mattis sed sagittis tincidunt nibh vitae nibh amet nullam. Est eleifend molestie tortor sapien."
  },
  {
    title: "Design And Interactions",
    description: "Lorem ipsum dolor sit amet consectetur. Sociis mattis sed sagittis tincidunt nibh vitae nibh amet nullam. Est eleifend molestie tortor sapien."
  },
  
  {
    title: "Design And Interactions",
    description: "Lorem ipsum dolor sit amet consectetur. Sociis mattis sed sagittis tincidunt nibh vitae nibh amet nullam. Est eleifend molestie tortor sapien."
  },
   {
    title: "Design And Interactions",
    description: "Lorem ipsum dolor sit amet consectetur. Sociis mattis sed sagittis tincidunt nibh vitae nibh amet nullam. Est eleifend molestie tortor sapien."
  },
  {
    title: "Design And Interactions",
    description: "Lorem ipsum dolor sit amet consectetur. Sociis mattis sed sagittis tincidunt nibh vitae nibh amet nullam. Est eleifend molestie tortor sapien."
  },
  {
    title: "Design And Interactions",
    description: "Lorem ipsum dolor sit amet consectetur. Sociis mattis sed sagittis tincidunt nibh vitae nibh amet nullam. Est eleifend molestie tortor sapien."
  },
   {
    title: "Design And Interactions",
    description: "Lorem ipsum dolor sit amet consectetur. Sociis mattis sed sagittis tincidunt nibh vitae nibh amet nullam. Est eleifend molestie tortor sapien."
  },
  {
    title: "Design And Interactions",
    description: "Lorem ipsum dolor sit amet consectetur. Sociis mattis sed sagittis tincidunt nibh vitae nibh amet nullam. Est eleifend molestie tortor sapien."
  },
  {
    title: "Design And Interactions",
    description: "Lorem ipsum dolor sit amet consectetur. Sociis mattis sed sagittis tincidunt nibh vitae nibh amet nullam. Est eleifend molestie tortor sapien."
  },
];

export default function Aboutpage() {
  const [language, setLanguage] = useState("English");
  const [open, setOpen] = useState(false);

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
      {/* ===============================
          GRADIENT SECTION (NAV + HERO)
      =============================== */}
      <div className="top-gradient-section">
        {/* HEADER */}
        <header className="glass-header">
          <div className="header-container">
            <div className="logo">
              {/* DAR<span className="logo-bracket">|</span>
              <span className="logo-symbol">✦</span> */}

 <img 
      className="navlogo"  src={navlogo} 
        alt="dar logo" 
      />

            </div>

            <nav>
              <ul>
                <li><a href="/about">About us</a></li>
                <li><a href="/project">Projects</a></li>
                <li><a href="/catalogue">Catalogue</a></li>
                <li><a href="/appointment">Appointment</a></li>
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

        {/* HERO */}
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


 <section className="fh-wrap">
      {/* Left image */}
      <div className="fh-card fh-image">
        <img src={p4} alt="Left" />
      </div>

      {/* Middle stats card */}
      <div className="fh-card fh-stats">
        <div className="fh-statsTop">
          <p className="fh-small">
            DAR was created to make furniture personal. We believe every home
            deserves pieces made just for it.
          </p>

          <div className="fh-big">94%</div>
        </div>

        <div className="fh-statsBottom">
          <p className="fh-small fh-small--light">
            As Kuwait’s first smart furniture design experience, we help you
            design what truly fits your space and style.
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
        Smart furniture design in Kuwait,<br />
        shaped by you.
      </h1>

      <p class="dar-desc">
        DAR is Kuwait’s first smart furniture design experience, created to redefine how people bring their ideas to life.
        We empower you to shape every detail, size, style, and finish. So each piece is not just furniture, but a reflection
        of your taste and a perfect fit for your space.
      </p>
    </div>
  </div>
</section>


<section class="ourstory">
  <div class="ourstory__wrap">

    
    <div class="ourstory__left">
      <div class="ourstory__top">
        <div class="ourstory__kicker">OUR STORY</div>

        <h2 class="ourstory__title">The idea behind DAR</h2>

        <p class="ourstory__desc">
          DAR was founded with a vision to bridge design and technology. We saw the challenges people face when shopping for furniture—limited
          choices, unclear sizing, mismatched finishes, and decided to build a smarter way.
        </p>
      </div>

      <div class="ourstory__bottom">
        <div class="ourstory__line"></div>

        <div class="ourstory__stats">
          <div class="ourstory__stat">
            <div class="ourstory__num">240+</div>
            <div class="ourstory__label">Designs</div>
          </div>

          <div class="ourstory__stat">
            <div class="ourstory__num">100%</div>
            <div class="ourstory__label">Precision</div>
          </div>

          <div class="ourstory__stat">
            <div class="ourstory__num">2020</div>
            <div class="ourstory__label">Since</div>
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
      muted
      loop
      playsInline
      preload="auto"
    />
  </div>
</div>
  </div>
</section>

      {/* JOURNEY */}
      <section className="journey">
        <div className="journey-header">
          <span className="journey-tag">OUR JOURNEY</span>
          <h2>
            Whether it’s your home, office, or commercial project,
            we bring your vision to life.
          </h2>
        </div>

        <div className="journey-content">
       <div className="timeline">

  <div className="timeline-item">
    <div className="dot"></div>
    <h3>2020 - Innovation Born</h3>
    <p>Remote interior solutions during COVID.</p>
  </div>

  <div className="timeline-item">
    <div className="dot"></div>
    <h3>2021 - Team Growth</h3>
    <p>Expanded designers & engineers.</p>
  </div>

  <div className="timeline-item">
    <div className="dot"></div>
    <h3>2022 - Omaksan Partnership</h3>
    <p>Enhanced technology & delivery.</p>
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
            <p className="impact-kicker">OUR IMPACT</p>
          </div>

          <div className="impact-right">
            <p className="impact-text">
              Since our launch, DAR has redefined how people bring furniture into their homes by turning imagination into
              reality. We’ve guided designs from vision to creation, crafted pieces that reflect individuality, and earned
              the trust of those who value precision and style. These milestones are more than numbers; they represent
              homes transformed, ideas realized, and the confidence our community places in us.
            </p>

            <div className="impact-bracket"></div>

            <div className="impact-stats">
              <div className="impact-stat">
                <h3 className="impact-num">1st</h3>
                <p className="impact-label">In Kuwait</p>
              </div>

              <div className="impact-divider"></div>

              <div className="impact-stat">
                <h3 className="impact-num">250+</h3>
                <p className="impact-label">Projects Completed</p>
              </div>

              <div className="impact-divider"></div>

              <div className="impact-stat">
                <h3 className="impact-num">40+</h3>
                <p className="impact-label">Team Members</p>
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
            <div className="sf-icon"><img src={pin}/></div>
            <h3 className="sf-title">Personal by Design</h3>
            <p className="sf-text">
              Every piece begins with you. Your taste, your space, your lifestyle.
              DAR gives you the freedom to create furniture that feels truly yours.
            </p>
          </div>


          <div className="sf-box">
           <div className="sf-icon"><img src={star}/></div>
            <h3 className="sf-title">Crafted with Care</h3>
            <p className="sf-text">
              Behind every design is skilled craftsmanship and attention to detail,
              ensuring that your furniture is not only beautiful but built to last.
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
            <div className="sf-icon"><img src={ball}/></div>
            <h3 className="sf-title">Clarity Always</h3>
            <p className="sf-text">
              From design to delivery, we keep the process simple and transparent,
              with clear choices, timelines, and expectations at every step.
            </p>
          </div>


          <div className="sf-box">
            <div className="sf-icon"><img src={couch}/></div>
            <h3 className="sf-title">Built for Living</h3>
            <p className="sf-text">
              We design with real life in mind—pieces that fit your space perfectly,
              elevate your home, and stay with you for years to come.
            </p>
          </div>
        </div>
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



<section className="careers-section">
      <div className="careers-left">
        <span className="subtitle">OUR CAREERS</span>
        <h2>Ready to Join Our Journey</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tortor quis elementum cum nunc
          libero. Elit purus ipsum mauris ullamcorper. Lacus.
        </p>
        <div className="arrow-buttons">
          <button onClick={() => scroll("left")}>←</button>
          <button onClick={() => scroll("right")}>→</button>
        </div>
      </div>

      <div className="careers-right" ref={scrollRef}>
        {careerCards.map((card, idx) => (
          <div className="career-card" key={idx}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="apply-btn">Apply Now →</button>
          </div>
        ))}
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