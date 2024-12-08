import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');
    // Proceed with form submission or API call
    console.log('Form submitted.');
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Sign Up</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Parent Name</label>
          <input type="text" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Child's Name</label>
          <input type="text" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Child's Age</label>
          <input type="number" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" className="form-input" required />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="form-button">Sign Up</button>
      </form>
      <footer className="form-footer">
        <p className="form-text">
          Already have an account? <Link to="/login" className="form-link">Log in.</Link>
        </p>
      </footer>
    </div>
  );
}


