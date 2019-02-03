import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, ...rest }) => {
  return (
    <Route { ...rest }
      path    =  { path }
      render  =  { (props) => {
        return (
          !loggedIn
            ? <Component { ...props } />
            : <Redirect to='/' />
        )}
      }
    />
  )
};

const Protected = ({ component: Component, path, loggedIn, ...rest }) => {
  // console.log('%component', 'color:white; border:blue 4px dotted; background:red;', Component);
  // console.log('%cpath', 'color:white; border:blue 4px dotted; background:red;', path);
  return (
    <Route { ...rest }
      path    =  { path }
      render  =  { (props) => {
        console.log('%cprops', 'color:white; border:blue 4px dotted; background:red;', props);
        return (
          loggedIn
            ? <Component { ...props } />
            : <Redirect to={'/login'} />
        )}
      }
    />
  )
};

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.currentUser) }
);

export const AuthRoute = withRouter(
  connect(mapStateToProps, null)(Auth)
);

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
