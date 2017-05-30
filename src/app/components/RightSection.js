import React from 'react';

import { Route, Link, Switch } from 'react-router-dom'

import { Scrollbars } from 'react-custom-scrollbars';
import { lerum } from './fakecontent'

let folder = require('.././vendor/icons/document-green.svg');

export default
class Notes extends React.Component {
  renderFiles() {
    let notes = [
      {
        id: '1',
        title: 'Short',
        folder: 'root',
        content: 'asdsasda dasd asdsa dasd asd sad sad sa'
      },
      {
        id: '2',
        title: 'Meeeedium',
        folder: 'root',
        content: 'asdsasda dasd asdsa dasd asd sad sad sa'
      },
      {
        id: '3',
        title: 'So long is ridiculousas asdasd asd assd asd',
        folder: 'Cats',
        content: 'asdsasda dasd asdsa dasd asd sad sad sa'
      },
      {
        id: '4',
        title: 'Today was a good day',
        folder: 'Cats',
        content: 'asdsasda dasd asdsa dasd asd sad sad sa'
      }
    ];
    //let spreaderNotes = [];
    //for (let x=0; x<2; x++) {
    //  spreaderNotes.push(...notes);
    //}
    let spreaderNotes = notes;

    var notesList = spreaderNotes.map(function (notes, index) {
      return (
          <div class="container-folder" key={notes.id}>
            <Link to={'/note/' + notes.id}>
              <img class="img-folder" src={folder} />
              <div class="description-folder">{notes.title}</div>
            </Link>
          </div>
      );
    });
    return (<div>{ notesList }</div>);
  }

  renderContent() {
    return (
        <Scrollbars
            autoHide={false}
            renderThumbVertical ={() =>
                <div style={{background: '#3b4245' }}/>
                }
        >
          <div class="note-wrapper">
            <div class="note-title">{lerum.title}</div>
            <div class="note-content">{lerum.content}</div>
          </div>
        </Scrollbars>
    )
  }

  componentWillUpdate() {
    // get data for current directory
  }

  render() {
    return (
        <Switch>
          <Route
              exact path="/note"
              render={({match}) => (
                  <div>
              {this.renderContent()}
                  </div>
              )}
          />
          <Route
              path="/"
              render={() => (
                  this.renderFiles()
              )}
          />
        </Switch>
    );
  }
}

//<div>
//  {this.renderFiles()}
//</div>