import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //Remove after testing is complete
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //Remove after testing is complete

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root)
});
