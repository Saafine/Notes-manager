import React from 'react';

import { Route, Link, Switch } from 'react-router-dom' // !todo cleanup
import { userFolders } from './userFolders'
import AddNote from './AddNote'
import ShowDocuments from './ShowDocuments'

import { Scrollbars } from 'react-custom-scrollbars';
import { lerum } from './fakecontent'

let folder = require('.././vendor/icons/document-green.svg');




export default
class RightSection extends React.Component {
  render() {
    return (
        <Switch>
          <Route
              exact path="/:folder/:id"
              render={({match}) => (
                  <AddNote noteID={match.params.id}/>
              )}
          />
          <Route
              path="/"
              component={ShowDocuments}
          />
        </Switch>
    );
  }
}

//<Route
//    exact path="/add-note"
//    component={AddNote}
///>