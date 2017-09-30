import React from 'react';
import { Link } from 'react-router-dom';

const navSessionLinks = () => (

    <nav className="nav-login-signup-flex-container">
      <div className="spacer"></div>

      <Link
        className="nav-login-button"
        to="/login">
        log in
      </Link>

      <div className="spacer"></div>

      <Link
        className="nav-signup-button"
        to="/signup">
        sign up
      </Link>

      

      <div className="spacer"></div>
  </nav>

);

const navGreet = (currentUser, logout) => (
	<hgroup className="nav-header-logout-container">

    <button
      className="nav-logout-button"
      onClick={ logout }>
      log out
    </button>

	</hgroup>
);

const navigationBar = ({ currentUser, logout }) => (
  currentUser ? navGreet(currentUser, logout) : navSessionLinks()
);

export default navigationBar;
