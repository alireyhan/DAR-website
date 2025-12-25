import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./landingpage.css";
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
import p17 from "./images/p17.jpg"
import p18 from "./images/p18.jpg";
import footer from "./images/footer.png";
import navlogo from "./images/navlogo.png";

// Video
import video from "./images/video1.mp4";

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

export default function Landingpage() {
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

      {/* DAR SECTION */}
      

      <div className="space-section">
        <div className="space-actions">
          <button className="action-btn"><span className="icon-circle">👤</span>Book DAR Crew</button>
          <button className="action-btn"><span className="icon-circle">📏</span>Book Measurements</button>
          <button className="action-btn"><span className="icon-circle">📦</span>Track Your Order</button>
        </div>
        <div className="space-banner">
          <div className="space-text">
            <h2>Design Your Space Your Way</h2>
            <p>Bring your ideas to life, create custom furniture <br /> tailored to your room.</p>
            <button className="space-cta">Click to Go to DAR Platform <span>↗</span></button>
          </div>
          <div className="space-logo">
            <img src={logo} alt="DAR" />
          </div>
        </div>
      </div>

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

      {/* DEMO */}
      <section className="demo-section">
        <h2>Design furniture online in minutes</h2>
        <video className="demo-video" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* SHOWCASE */}
      <div className="showcase-container">
        <div className="showcase-header">
          <h1>DAR Project Showcase</h1>
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
          <button className="book-button">Book DAR Crew →</button>
        </div>
      </div>

      {/* WHY CHOOSE DAR */}
      <section className="why">
        <p className="eyebrow">WHY CHOOSE DAR</p>

        <h2 className="title">
          We craft experiences that transform <br />
          your living space into a reflection of <br />
          your style.
        </h2>

        <div className="grid">
          <div className="card">
            <div className="icon">💰</div>
            <h3>Transparent Pricing</h3>
            <p>
              Instantly view costs as you design—no hidden fees. Every choice you
              make updates pricing in real-time so you stay in full control of
              your budget.
            </p>
          </div>

          <div className="card center">
            <div className="icon">⚡</div>
            <h3>Faster Process</h3>
            <p>
              Skip the back-and-forth with contractors. Our smart platform reduces
              design and approval time from weeks to just a few clicks.
            </p>
          </div>

          <div className="card">
            <div className="icon">📊</div>
            <h3>Track Projects Online</h3>
            <p>
              Track your projects, approvals, and updates seamlessly online.
              Whether on desktop, tablet, or mobile, your designs go wherever you
              go.
            </p>
          </div>

          <div className="card">
            <div className="icon">🛠️</div>
            <h3>Design It Your Way</h3>
            <p>
              From dimensions to finishes, create furniture that matches your
              exact style and needs. With DAR, you’re not limited to templates.
            </p>
          </div>  

          <div className="card">
            <div className="icon">🚚</div>
            <h3>Trusted Delivery</h3>
            <p>
              From production to installation, DAR ensures your furniture is
              delivered and set up with precision, giving you peace of mind.
            </p>
          </div>
              <div className="card">
            <div className="icon">🚚</div>
            <h3>Trusted Delivery</h3>
            <p>
              From production to installation, DAR ensures your furniture is
              delivered and set up with precision, giving you peace of mind.
            </p>
          </div>

        </div>
      </section>


{/* ===============================
    DAR CATALOGUE SECTION
============================== */}
<section className="catalogue-section">
  <div className="catalogue-header">
    <p className="catalogue-eyebrow">WHAT WE PROUD OF</p>
    <h2 className="catalogue-title">DAR Catalogue</h2>
    
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
        <h3 className="card-title">Sweden melody</h3>
        <p className="card-location">Paris, France</p>
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
        <h3 className="card-title">Modern mix</h3>
        <p className="card-location">Madrid, Spain</p>
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
        <h3 className="card-title">Airy cave</h3>
        <p className="card-location">Amsterdam, Netherlands</p>
        <p className="card-year">2023</p>
      </div>
    </div>
  </div>

  <div className="catalogue-cta">
    <button className="btn-catalogue">
      View DAR Catalogue →
    </button>
  </div>
</section>



<section className="tech-section">
  <p className="tech-eyebrow">POWERED BY TECHNOLOGY</p>

  <h1 className="tech-heading">
    Kuwait’s first 3D furniture design<br />
    technology that brings your furniture<br />
    from design to life.
  </h1>

  <div className="tech-wrapper">
    {/* LEFT CONTENT */}
    <div className="tech-left">
      <h2 className="tech-title">
        3D FURNITURE DESIGN
        <span>INSTANT UPDATES</span>
        <span>SEAMLESS PROCESS</span>
      </h2>

      <p className="tech-desc">
        Easily visualize your ideas in an interactive 3D environment.
        Change dimensions, finishes, and layouts with a few clicks,
        no technical skills required.
      </p>

      <p className="tech-highlight">
        With DAR, technology transforms the traditional furniture journey
        into a smart, interactive, and stress-free process.
      </p>

      <div className="tech-bg-text">3D FURNITURE</div>
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
        <p className="section-subtitle">HOW IT WORKS</p>
        <h2 className="section-title">
          From idea to installation, DAR makes the journey <br /> effortless and transparent.
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