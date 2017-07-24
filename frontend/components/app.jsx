import React from 'react';
import { Route, Link, HashRouter, history } from 'react-router-dom';

import NavContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';
import CreateProjectContainer from './projects/create_project_container';
import SessionFormContainer from './session_form_component/session_form_container';
import IndexProjectContainer from './projects/index_projects_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app">
    <div className="header-flex-container">
      <div className="logo-spacer">

        <div className="logo-container">

          <Link to="/login"><img src="http://res.cloudinary.com/atomc/image/upload/v1500531260/Bento-Logo_fjv1os.png"></img></Link>
        </div>
      </div>

      <div className="spacer"></div>

      <div className="header-container">
        <header>
            <Link to="/login"><h1 className="Bento">Bento</h1></Link>
        </header>
      </div>

      <div className="spacer"></div>

      <div className="nav-splash-container">
          <div className="nav-splash-spacer">
            <NavContainer />
          </div>
          <div className="spacer"></div>
      </div>
    </div>
    <div className="session-form-containers">

      <switch>
        <AuthRoute
          path="/login"
          component={ SessionFormContainer }
        />
        <AuthRoute
          path="/signup"
          component={ SessionFormContainer }
        />
      <ProtectedRoute path="/" exact component={ IndexProjectContainer } />
    </switch>
    </div>
  </div>
);

export default App;
