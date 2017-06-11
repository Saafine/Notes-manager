import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Modal from './components/Modal';
import createStoreWithMiddleware from './store/configureStore';
import { startDataFetch } from './actions';

require('./vendor/bootstrap/bootstrap.scss');
require('./styles/main.scss');
require('./vendor/fonts-awesome/font-awesome.min.css');

const store = createStoreWithMiddleware();
store.dispatch(startDataFetch('0'));

render(
  <Provider store={store}>
    <Router>
      <div class="expand-height">
        <Modal />
        <Navbar />
        <MainContent />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);