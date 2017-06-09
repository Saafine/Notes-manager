import React from 'react';
import Navbar from './components/Navbar'; // !todo cleanup it actually doesnt route anything
import MainContent from './components/MainContent';
import Modal from './components/Modal';

import {
    BrowserRouter as Router
} from 'react-router-dom';

const Routes = () => (
    <Router>
      <div class="expand-height">
          <Modal />
          <Navbar />
          <MainContent />
      </div>
    </Router>
);

export default Routes;