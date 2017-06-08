import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'; // !todo cleanup
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeNoteContent, changeName } from '../actions';

let addIcon = require('.././vendor/icons/add-green.svg');
let saveIcon = require('.././vendor/icons/save-green.svg');

class NoteOptions extends React.Component {
  constructor () {
    super();
    this.saveNote = this.saveNote.bind(this);
  }

  saveNote () {
    let currentTitle = document.getElementById('note-send-title').value;
    let currentContent = document.getElementById('note-send-content').value;
    let currentFolder = 0; // GET GLOBAL STATE FOLDER
    let currentID = 0; // GET GLOBAL STATE ID
    let userID = 0; // GET GLOBAL USER ID
    let origin = window.location.origin; // !todo find better way

    axios.post(origin + '/php/saveNote.php', {
      userID: userID,
      noteTitle: currentTitle,
      noteContent: currentContent,
      noteFolder: currentFolder,
      noteID: currentID,
      timestamp: Date.now()
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // console.log(this.props.globalNoteID);
    // console.log(this.props.globalNoteTitle);
    // console.log(this.props.globalNoteContent);
    // console.log(this.props.globalNoteID);
    // let changeMyName = new Promise((resolve) => {
    // this.props.getChangeName('abc');
    //   this.props.getChangeNoteContent('new content');
    //   resolve('success');
    // });

    // changeMyName.then(() => {
    // console.log(this.props.globalName);
    // console.log(this.props.globalNoteTitle);
    // console.log(this.props.globalNoteContent);
    // console.log(this.props.globalNoteID);
    // });

    // axios.post('/saveNote.php', {
    //   noteTitle: this.state.noteTitle,
    //   noteContent: this.state.noteContent,
    //   noteID: this.state.noteID,
    //   timestamp: Date.now()
    // })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  render () {
    // specifies to which folder, the addNote icon will point to. In case of root path '/', it will point to '/home'
    let specifyFolder = (location.pathname) === '/' ? 'home/addNote' : location.pathname + '/addNote';
    return (
      <Switch>
        <Route path="/trash"/>
        <Route path="/recent"/>
        <Route exact path="/:folder"
               render={() => (
                 <div>
                   <Link to={specifyFolder}>
                     <div class="note-icon">
                       <img src={addIcon} alt="add-icon"/>
                     </div>
                   </Link>
                 </div>
               )}
        />
        <Route exact path="/:folder/:id"
               render={() => (
                 <div class="note-icon">
                   <img onClick={this.saveNote} src={saveIcon} alt="save-icon"/>
                 </div>
               )}
        />
      </Switch>
    );
  }
}

// enable reading redux states
function mapStateToProps (state) {
  return {
    globalName: state.name,
    globalNoteTitle: state.note.title,
    globalNoteContent: state.note.content,
    globalNoteID: state.note.ID
  };
}

// enable using action dispatches
function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      getChangeName: changeName,
      getChangeNoteContent: changeNoteContent
    }, dispatch);
}

// !todo temp solution, see https://github.com/reactjs/react-redux/blob/v4.0.0/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux
export default connect(mapStateToProps, matchDispatchToProps, null, {
  pure: false
})(NoteOptions);
