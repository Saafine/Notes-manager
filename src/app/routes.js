import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

import {
    BrowserRouter as Router,
    Route,
    Link
    } from 'react-router-dom';

const Routes = () => (
    <Router>
      <div class="expand-height">
        <Route path="/" component={Navbar} />
          <MainContent />
      </div>
    </Router>
);

export default Routes;