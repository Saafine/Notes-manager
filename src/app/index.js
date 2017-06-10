import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import createStoreWithMiddleware from './store/configureStore';
require('./vendor/bootstrap/bootstrap.scss');
require('./styles/main.scss');
require('./vendor/fonts-awesome/font-awesome.min.css');

const store = createStoreWithMiddleware();
render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);