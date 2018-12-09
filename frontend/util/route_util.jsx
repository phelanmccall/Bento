import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => {
  return (
  <Route
    path    =  { path }
    render  =  {(props) => {
                 const {computedMatch, ...apple }= props

                 return (
                   !loggedIn ? (
                     <Component {...apple} />
                   ) : (
                     // We removed:
                     <Redirect to='/' />
                     // bc below
                     // <Component {...props} />
                   )
                 )
               }}
  />
)
};
// ------------XXX-------------
// LOGIN IS NOT WORKING FAM
//   WE GOTTA GET ON THIS FAM!
// ------------XXX-------------

  const Protected = ({ component: Component, path, loggedIn }) => {
    return (
  <Route
    path    =  { path }
    render  =  {
                 (props) => {
                   const {computedMatch, ...banana }= props

                  return (
                    loggedIn ? (
                     <Component {...banana} />
                   ) : (
                     <Redirect to='/login' />
                   )
                 )
               }}
  />
)};

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.currentUser) }
);

export const AuthRoute = withRouter(
  connect(mapStateToProps, null)(Auth)
);

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
