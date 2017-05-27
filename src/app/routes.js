import React from 'react';
//import Create from './components/Create';

import {
    BrowserRouter as Router,
    Route,
    Link
    } from 'react-router-dom';

const Routes = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Animations</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={Animations} />
        <Route path="/notes" render={() => (<div>I am rendered</div>)}/>
        <Route path="/create" component={Create} />
      </div>
    </Router>
);

export default Routes;