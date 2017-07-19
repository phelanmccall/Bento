import React from 'react';
import { Route } from 'react-router-dom';

import SplashContainer from './splash/splash_container';

const App = () => (
  <div className="app">
    <header>
      <h1>Hi from App</h1>
      <SplashContainer />
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
);

export default App;
