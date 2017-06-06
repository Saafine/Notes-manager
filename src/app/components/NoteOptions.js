import React from 'react';
import { Route, Link, Switch } from 'react-router-dom' // !todo cleanup
let addIcon = require('.././vendor/icons/add-green.svg');
let saveIcon = require('.././vendor/icons/save-green.svg');

export default
class NoteOptions extends React.Component {
  render() {
    return (
        <Switch>
          <Route path="/trash"/>
          <Route path="/:folder/:id"
              render={({}) => (
                  <div class="note-icon">
                    <img src={saveIcon} alt="save-icon"/>
                  </div>
              )}
          />
          <Route path="/"
              render={({}) => (
                  <div>
                    <div class="note-icon">
                      <img src={addIcon} alt="add-icon"/>
                    </div>
                  </div>
              )}
          />
        </Switch>
    );
  }
}