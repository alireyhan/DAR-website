import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { FaWhatsapp, FaCalendar, FaClock, FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import Footer from "./Footer";
import "./appointment.css";
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
import video from "./images/video1.mp4";
import head from "./images/head.jpeg";
import Accountant from "./images/Account.jpeg";
import design from "./images/headesigner.jpeg";
import marketing from "./images/market.jpeg";

const photoArray = [
  p1, p2, p3, p4, p5, p6, p8, p9, p10, p11, p12, p13
];
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";


import { useTranslation } from "react-i18next";

export default function Appointmentpage() {
  const message1 = "Hello, I want to get more information.";
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.user.user);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === "#measurement-section") {
      const element = document.getElementById("measurement-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    address: "",
    zipCode: "",
    details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!user?._id) {
      alert(t('appointmentPage.loginRequired'));
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const payload = {
        name: `Measurement Request - ${formData.firstName} ${formData.lastName}`,
        measurment: "Standard",
        measurementDate: new Date(`${formData.date}T${formData.time}`),
        comments: `${formData.details} \n Address: ${formData.address}, ZIP: ${formData.zipCode} \n Phone: ${formData.phone} \n Email: ${formData.email}`,
        type: "Measurement",
        lineItems: [],
        customerId: user._id,
      };

      const response = await axios.post(`${API_BASE_URL}/measurements`, payload);

      if (response.status === 200 || response.status === 201) {
        setMessage(t('appointmentPage.success'));
        setFormData({
          firstName: "", lastName: "", phone: "", email: "", date: "", time: "", address: "", zipCode: "", details: "",
        });
      }
    } catch (error) {
      console.error("Error booking:", error);
      setMessage(t('appointmentPage.fail'));
    } finally {
      setLoading(false);
    }
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
        href={`https://wa.me/96565964302?text=${encodeURIComponent(message1)}`}

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
            <button className="btn-outline">
              {t('hero.bookMeasurements')} ↗
            </button>
            <button className="btn-primary">
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

      <section className="book-section" id="measurement-section">


        <p className="book-topline">{t('appointmentPage.bookTopline')}</p>
        <h2 className="book-title">
          {t('appointmentPage.bookTitle')}
        </h2>

        <div className="book-card">

          <h4 className="section-title">{t('appointmentPage.personalInfo')}</h4>
          <div className="grid-2">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder={t('appointmentPage.firstName')} />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder={t('appointmentPage.lastName')} />
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={t('appointmentPage.phone')} />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={t('appointmentPage.email')} />
          </div>


          <h4 className="section-title">{t('appointmentPage.details')}</h4>

          <div className="tabs">
            <button className="tab">{t('appointmentPage.tabs.design')}</button>
            <button className="tab active">{t('appointmentPage.tabs.measurements')}</button>
            <button className="tab">{t('appointmentPage.tabs.followUp')}</button>
            <button className="tab">{t('appointmentPage.tabs.other')}</button>
          </div>

          <div className="grid-2">
            <div className="input-icon">
              <FaCalendar /> <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
            </div>
            <div className="input-icon">
              <FaClock /> <input type="time" name="time" value={formData.time} onChange={handleInputChange} />
            </div>

            <div className="input-icon">
              <FaMapMarkerAlt /> <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder={t('appointmentPage.address')} />
            </div>
            <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder={t('appointmentPage.zipCode')} />

            <textarea
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              placeholder={t('appointmentPage.placeholderDetails')}
              className="details-area"
            ></textarea>
          </div>

          <p style={{ color: message.includes("success") || message === t('appointmentPage.success') ? "green" : "red" }}>{message}</p>
          <button className="btn-submit" onClick={handleSubmit} disabled={loading}>
            {loading ? t('appointmentPage.booking') : t('appointmentPage.bookBtn') + " ↗"}
          </button>
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
            <div className="highlight-icon">👥</div>
            <p className="highlight-text">
              {t('aboutPage.teamHighlight')}
            </p>
          </div>
        </div>
      </div>






      <section className="hero-section">
        <img src={p5} alt="" className="hero-img" />
        <div className="hero-content">
          <p className="hero-subheading">{t('hero.crafting')}</p>
          <p className="hero-main-text">
            {t('hero.easyChange')}
          </p>
          <button className="btn-book-measurements">
            {t('hero.bookMeasurements')} <span className="arrow">→</span>
          </button>
        </div>
      </section>








      <Footer />


    </>
  );
}