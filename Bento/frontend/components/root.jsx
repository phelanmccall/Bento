import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

// import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <h1>HELLO</h1>
    </HashRouter>
  </Provider>
);

export default Root;
