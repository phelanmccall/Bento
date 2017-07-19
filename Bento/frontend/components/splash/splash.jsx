import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link
      to="/login">
      Login
    </Link>

    <Link
      to="/signup">
      Sign up!
    </Link>
  </nav>
);

const greet = (currentUser, logout) => (
	<hgroup className="header-container">
    <h2 className="header-greet-name">
      Hi, {currentUser.username}!
    </h2>
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
