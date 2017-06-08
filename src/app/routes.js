import React from 'react';
import Navbar from './components/Navbar'; // !todo cleanup it actually doesnt route anything
import MainContent from './components/MainContent';

import {
    BrowserRouter as Router
} from 'react-router-dom';

const Routes = () => (
    <Router>
      <div class="expand-height">
          <Navbar />
          <MainContent />
      </div>
    </Router>
);

export default Routes;