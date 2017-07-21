import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const navSessionLinks = () => (

    <nav className="nav-login-signup-flex-container">
      <div className="spacer"></div>
      <NavLink
        activeClassName="reactive"
        className="nav-login-button"
        to="/login">
        log in<div className="nest"> { "" }</div>
      </NavLink>
      <div className="spacer special-space"></div>
      <NavLink
        activeClassName="reactive"
        className="nav-signup-button"
        to="/signup">
        sign up<div className="nest"> { "" }</div>
      </NavLink>
      <div className="spacer"></div>

    </nav>

);

const navGreet = (currentUser, logout) => (
	<hgroup className="header-logout-container">

    <button
      className="nav-logout-button"
      onClick={ logout }>
      log out, {currentUser.username}
    </button>
	</hgroup>
);

const Navbar = ({ currentUser, logout }) => (
  currentUser ? navGreet(currentUser, logout) : navSessionLinks()
);

export default Navbar;
