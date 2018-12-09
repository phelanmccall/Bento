import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        // We removed:
        // <Redirect to='/' />
        // bc below
        <Component {...props} />
    )
  )} />
);
// ------------XXX-------------
// LOGIN IS NOT WORKING FAM
//   WE GOTTA GET ON THIS FAM!
// ------------XXX-------------

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/login' />
    )
  )} />
);

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.currentUser) }
);

export const AuthRoute = withRouter(
  connect(mapStateToProps, null)(Auth)
);

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
