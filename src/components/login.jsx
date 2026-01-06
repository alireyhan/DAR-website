import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../redux/userSlice';
import './login.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
          alert('Logged in successfully!');
          navigate('/dashboard');
        } else {
          alert(result.payload?.message || 'Login failed. Check your credentials.');
        }
      } else {
        // Register
        const result = await dispatch(registerUser({ userName, email, phone, password }));
        if (registerUser.fulfilled.match(result)) {
          alert('User registered successfully!');
          setUserName('');
          setEmail('');
          setPhone('');
          setPassword('');
        } else {
          alert(result.payload?.message || 'Registration failed. User may already exist.');
        }
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container">
         <a
       href={`https://wa.me/96555559585?text=${encodeURIComponent(message)}`}
           
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

        <h1 className="title">{isLogin ? 'Welcome Back' : 'Join DARJI'}</h1>
        <p className="subtitle">
          {isLogin
            ? 'Log in to continue designing your space with full control.'
            : 'Sign up to experience Kuwait’s first interactive 3D configurator.'}
        </p>

        <form className="form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="input"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          )}

          {!isLogin && (
            <input
              type="tel"
              placeholder="Phone Number"
              className="input"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot">Forgot password?</a>
            </div>
          )}

          {error && <p className="error-message">{error?.message || error}</p>}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Processing...' : isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <p className="switch">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="switch-link"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>

        <div className="badge">
          <span className="star">★</span> 1200+ trusted customers
        </div>
      </div>
    </div>
  );
}
