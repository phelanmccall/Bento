import React from 'react';
import { Route, Link } from 'react-router-dom';

import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form_component/session_form_container'

const App = () => (
  <div className="app">
    <div className="header-flex-container">
      <div className="logo-spacer">

        <div className="logo-container">

          <Link to="/"><img src="http://res.cloudinary.com/atomc/image/upload/v1500531260/Bento-Logo_fjv1os.png"></img></Link>
        </div>
      </div>

      <div className="spacer"></div>

      <div className="header-container">
        <header>
            <Link to="/"><h1 className="Bento">Bento</h1></Link>
        </header>
      </div>

      <div className="spacer"></div>

      <div className="splash-container">
          <div className="splash-spacer">
            <SplashContainer />
          </div>
          <div className="spacer"></div>
      </div>
    </div>
    <div className="session-form-containers">

      <Route
        path="/login"
        component={ SessionFormContainer }
      />
      <Route
        path="/signup"
        component={ SessionFormContainer }
      />
    </div>
  </div>
);

export default App;
