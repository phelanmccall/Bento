import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup-flex-container">
    <div className="login-and-signup-buttons">
      <Link
        className="login-button"
        to="/login">
        log in
      </Link>
      <div className="spacer"></div>
      <Link
        className="signup-button"
        to="/signup">
        sign up
      </Link>
      <div className="spacer"></div>
    </div>
  </nav>
);

const greet = (currentUser, logout) => (
	<hgroup className="header-container">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button
      className="logout-button"
      onClick={ logout }>
      Log Out
    </button>
	</hgroup>
);

const Splash = ({ currentUser, logout }) => (
  currentUser ? greet(currentUser, logout) : sessionLinks()
);

export default Splash;
