import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../redux/userSlice';
import './login.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login
        const result = await dispatch(loginUser({ email, password }));
        if (loginUser.fulfilled.match(result)) {
          alert('Logged in successfully!');
        } else {
          alert(result.payload?.message || 'Login failed. Check your credentials.');
        }
      } else {
        // Register
        const result = await dispatch(registerUser({ userName, email, password }));
        if (registerUser.fulfilled.match(result)) {
          alert('User registered successfully!');
          setUserName('');
          setEmail('');
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

          <input
            type="email"
            placeholder="Email Address"
            className="input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
