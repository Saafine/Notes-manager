import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
require('./vendor/bootstrap/bootstrap.scss');
require('./styles/main.scss');
require('./vendor/fonts-awesome/font-awesome.min.css');
let store = require('./store/configureStore').configure();

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);