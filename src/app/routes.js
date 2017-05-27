import React from 'react';
import Navbar from './components/Navbar';

import {
    BrowserRouter as Router,
    Route,
    Link
    } from 'react-router-dom';

const Routes = () => (
    <Router>
      <div>
        <Route exact path="/" component={Navbar} />
      </div>
    </Router>
);

export default Routes;