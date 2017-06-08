import React from 'react';
import { userFolders } from './userFolders';
import { Scrollbars } from 'react-custom-scrollbars';
import { Route, Link, Switch } from 'react-router-dom'; // !todo cleanup

let folder = require('.././vendor/icons/document-green.svg');

export default
class ShowDocuments extends React.Component {
  renderNotes () {
    let currentDir = location.pathname.replace(/\//g, ''); // remove slash "/" from current url location
    let prevFilteredNotes = JSON.parse(JSON.stringify(userFolders)); // deep cloning the object to sort without mutating original data
    let newFilteredNotes;

    // hide deleted files, if user is not looking at trash folder
    // &&
    // show all files if user is looking at "/" home directory
    if (currentDir !== 'trash') {
      newFilteredNotes = prevFilteredNotes.filter((folder) => {
        return folder.link !== 'trash';
      });
    }

    // return notes that fit current directory
    if (currentDir !== '' && currentDir !== 'recent') {
      newFilteredNotes = prevFilteredNotes.filter((folder) => {
        return (folder.link === currentDir);
      });
    }

    // sort notes if category current dir is 'recent'
    if (currentDir === 'recent') {
      newFilteredNotes = newFilteredNotes.sort((a, b) => {
        return a.timestamp - b.timestamp;
      });
    }

    // Loop through every folder and inside this folder, loop through every document
    let notesList = newFilteredNotes.map((notes) => {
      return (
        notes.content.map((content) => {
          return (
            <div class="container-folder" key={content.noteID}>
              <Link to={'/' + notes.link + '/' + content.noteID}>
                <img class="img-folder" src={folder}/>
                <div class="description-folder">{content.noteTitle}</div>
              </Link>
            </div>
          );
        })
      );
    });
    return notesList;
  }

  // !todo cleanup
  render () {
    return (
      <div>
        {this.renderNotes()}
      </div>
    );
  }
}