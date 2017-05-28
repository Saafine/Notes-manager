import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import {
    BrowserRouter as Router,
    Route,
    Link
    } from 'react-router-dom';

const Routes = () => (
    <Router>
      <div class="expand-height">
        <Route exact path="/" component={Navbar} />
        <div class="main-content">
          <Sidebar />
        </div>
      </div>
    </Router>
);

export default Routes;