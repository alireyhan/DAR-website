import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../redux/userSlice';
import { useTranslation } from 'react-i18next';
import './login.css';
import './what.css'
import { FaEye, FaEyeSlash, FaWhatsapp } from "react-icons/fa";

export default function Login() {
  const message = "Hello, I want to get more information.";
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login
        const result = await dispatch(loginUser({ email, password }));
        if (loginUser.fulfilled.match(result)) {
          alert(t('auth.alerts.loginSuccess'));
          navigate('/dashboard');
        } else {
          alert(result.payload?.message || t('auth.alerts.loginFailed'));
        }
      } else {
        // Register
        const result = await dispatch(registerUser({ userName, email, phone, password }));
        if (registerUser.fulfilled.match(result)) {
          alert(t('auth.alerts.registerSuccess'));
          setUserName('');
          setEmail('');
          setPhone('');
          setPassword('');
        } else {
          alert(result.payload?.message || t('auth.alerts.registerFailed'));
        }
      }
    } catch (err) {
      console.error(err);
      alert(t('auth.alerts.somethingWrong'));
    }
  };

  return (
    <div className="container">
      <a
        href={`https://wa.me/96565964302?text=${encodeURIComponent(message)}`}

        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <div className="background"></div>

      <div className="card">
        <div className="logo">
          DARJI <span className="diamond">✦</span>
        </div>

        <h1 className="title">{isLogin ? t('auth.welcomeBack') : t('auth.joinDarji')}</h1>
        <p className="subtitle">
          {isLogin
            ? t('auth.loginSubtitle')
            : t('auth.signupSubtitle')}
        </p>

        <form className="form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder={t('auth.fullName')}
              className="input"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          )}

          {!isLogin && (
            <input
              type="tel"
              placeholder={t('auth.phone')}
              className="input"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder={t('auth.email')}
            className="input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={t('auth.password')}
              className="input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {isLogin && (
            <div className="options">
              <label className="remember">
                <input type="checkbox" />
                <span>{t('auth.rememberMe')}</span>
              </label>
              <a href="#" className="forgot">{t('auth.forgotPassword')}</a>
            </div>
          )}

          {error && <p className="error-message">{error?.message || error}</p>}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? t('auth.processing') : isLogin ? t('auth.login') : t('auth.createAccount')}
          </button>
        </form>

        <div className="divider">
          <span>{t('auth.or')}</span>
        </div>

        <p className="switch">
          {isLogin ? t('auth.noAccount') : t('auth.haveAccount')}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="switch-link"
          >
            {isLogin ? t('auth.signUpLink') : t('auth.loginLink')}
          </button>
        </p>

        <div className="badge">
          <span className="star">★</span> {t('auth.trustedCustomers')}
        </div>
      </div>
    </div>
  );
}
