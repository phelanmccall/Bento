import React from 'react';
import { Route } from 'react-router-dom';

import SplashContainer from './splash/splash_container';

const App = () => (
  <div className="app">
    <h1>Hi from App</h1>
    <SplashContainer />
  </div>
);

export default App;
