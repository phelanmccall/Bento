import React from 'react';
import { Route } from 'react-router-dom';

import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form_component/session_form_container'

const App = () => (
  <div className="app">
    <div className="header-flex-container">
      <header>
        <div className="header-container">
          <h1>Bento</h1>
        </div>
      </header>

      <Route
        path="/login"
        component={ SessionFormContainer }
      />
      <Route
        path="/signup"
        component={ SessionFormContainer }
      />
    </div>

    <SplashContainer className="SplashContainer"/>

  </div>
);

export default App;
