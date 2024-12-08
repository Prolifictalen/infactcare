import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.trim() === '') {
      setErrorMessage('Password cannot be empty.');
      return;
    }

    setErrorMessage('');
    // Proceed with form submission or API call
    console.log('Form submitted:', { email, password });
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">login in to us</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <Link to="/forget-password" className="form-link right-align">
            Forget password?
          </Link>
          <input
            type="password"
            name="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" id="sub_btn" className="form-button">
          Login
        </button>
      </form>
      <footer className="form-footer">
        <p className="form-text">
          First time? <Link to="/Signup" className="form-link">Create an account</Link>.
        </p>
        <p className="form-text">
          <Link to="/" className="form-link">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
