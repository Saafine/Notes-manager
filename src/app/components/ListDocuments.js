import React from 'react';
import { Link } from 'react-router-dom'; // !todo cleanup
import { userFolders, userFoldersAJAX } from './userFolders';
let folder = require('.././vendor/icons/document-green.svg');

export default class ListDocuments extends React.Component {
  componentWillMount () {
    this.fetchNotesList(); // !todo should be replaced by reading state
  }

  fetchNotesList () {

  }

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
    return newFilteredNotes.map((notes) => {
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