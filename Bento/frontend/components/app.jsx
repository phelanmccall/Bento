import React from 'react';
import { Route, Link } from 'react-router-dom';

import Head from './head'
import NavContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';
import CreateProjectContainer from './projects/create_project_container';
import SessionFormContainer from './session_form_component/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app">
    <Head />
    <div className="session-form-containers">
      <h1>
        
      </h1>
      <switch>
        <AuthRoute
          path="/login"
          component={ SessionFormContainer }
        />
        <AuthRoute
          path="/signup"
          component={ SessionFormContainer }
        />
        <ProtectedRoute path="/" exact component={ SessionFormContainer } />
    </switch>
    </div>
  </div>
);

export default App;
