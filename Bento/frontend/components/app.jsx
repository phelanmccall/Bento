import React from 'react';
import { Route } from 'react-router-dom';

import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form_component/session_form_container'

const App = () => (
  <div className="app">
    <div className="header-flex-container">
      <div className="logo-spacer">

        <div className="logo-container">

          <img src="http://res.cloudinary.com/atomc/image/upload/v1500531260/Bento-Logo_fjv1os.png"></img>
        </div>
      </div>

      <div className="spacer"></div>

      <div className="header-container">
        <header>
            <h1>Bento</h1>
        </header>
      </div>

      <div className="spacer"></div>

      <div className="splash-container">
        <div className="spacer"></div>
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
