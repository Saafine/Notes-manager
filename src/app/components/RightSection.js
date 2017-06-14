import React from 'react';
import { Route, Switch } from 'react-router-dom'; // !todo cleanup
import OpenNote from './OpenNote';
import ListDocuments from './ListDocuments';

export default class RightSection extends React.Component {
  render () { // !todo compress routes
    return (
        <Switch>
          <Route
            exact path="/:folder/addNote"
            render={({match}) => (
              <OpenNote folderID={match.params.folder} noteID={'addNote'}/>
            )}
          />
          <Route
            exact path="/:folder/:id"
            render={({match}) => (
              <OpenNote folderID={match.params.folder} noteID={match.params.id}/>
            )}
          />
          <Route
            exact path="/:folder"
            render={({match}) => (
              <ListDocuments folderID={match.params.folder}/>
            )}
          />
          <Route
            exact path="/"
            render={({match}) => (
              <ListDocuments folderID={'home'}/>
            )}
          />
        </Switch>
    );
  }
}