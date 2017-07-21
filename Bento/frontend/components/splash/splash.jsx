import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const sessionLinks = () => (

    <nav className="login-signup-flex-container">
      <div className="spacer"></div>
      <NavLink
        activeClassName="reactive"
        className="login-button"
        to="/login">
        log in
      </NavLink>
      <div className="spacer special-space"></div>
      <NavLink
        activeClassName="reactive"
        className="signup-button"
        to="/signup">
        sign up
      </NavLink>
      <div className="spacer"></div>

    </nav>

);

const greet = (currentUser, logout) => (
	<hgroup className="header-logout-container">

    <button
      className="logout-button"
      onClick={ logout }>
      log out, {currentUser.username}
    </button>
	</hgroup>
);

const Splash = ({ currentUser, logout }) => (
  currentUser ? greet(currentUser, logout) : sessionLinks()
);

export default Splash;
