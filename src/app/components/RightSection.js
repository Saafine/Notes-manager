import React from 'react';

import { Route, Link, Switch } from 'react-router-dom'; // !todo cleanup
import { userFolders } from './userFolders';
import OpenNote from './OpenNote';
import ListDocuments from './ListDocuments';

import { Scrollbars } from 'react-custom-scrollbars';
import { lerum } from './fakecontent';

export default class RightSection extends React.Component {
  render () {
    return (
      <Switch>
        <Route
          exact path="/:folder/addNote"
          component={OpenNote}
        />
        <Route
          exact path="/:folder/:id"
          render={({match}) => (
            <OpenNote noteFolder={match.params.folder} noteID={match.params.id}/>
          )}
        />
        <Route
          path="/"
          component={ListDocuments}
        />
      </Switch>
    );
  }
}

//<Route
//    exact path="/add-note"
//    component={AddNote}
///>