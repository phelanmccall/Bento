//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { clearErrors } from './actions/session_actions';
import { fetchAllTeams } from './actions/team_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.clearErrors = clearErrors;
  window.fetchAllTeams = fetchAllTeams;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.getState = store.getState;
});
