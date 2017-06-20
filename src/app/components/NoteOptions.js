import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {startNoteSave, modalToggle, modalUpdateContent, noteUpdateSaveStatus} from '../actions';
import AddFolder from './modal/AddFolder';
import {withRouter} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import ContentSave from 'material-ui/svg-icons/content/save';
import CreateNewFolder from 'material-ui/svg-icons/file/create-new-folder';
import DefaultModal from './modal/DefaultModal';

const styleSaved = {backgroundColor: '#0e9342'};
const styleUnsaved = {backgroundColor: '#ff001f'};

class NoteOptions extends React.Component {
  saveNote () {
    if (this.props.gNoteSaved) {
      this.props.gToggleModal();
      this.props.gModalUpdateContent(<DefaultModal message={'Already saved.'} />);
      return;
    }

    let getTimestamp = Date.now();
    let noteObject = {
      title: this.props.gNoteTitle,
      content: this.props.gNoteContent,
      folderID: this.props.gUserFolderView,
      noteID: this.props.gUserNoteView,
      userID: this.props.gUserID,
      noteTimestamp: getTimestamp
    };

    if (noteObject.title.length === 0 || noteObject.content.length === 0) {
      this.props.gToggleModal();
      this.props.gModalUpdateContent(<DefaultModal message={'Note title and content can\'t be empty.'} />);
      return;
    }

    this.props.gStartNoteSave(noteObject);
  }

  createFolder () {
    this.props.gToggleModal();
    this.props.gModalUpdateContent(<AddFolder />);
  }

  createNote () {
    if (this.props.gUserFolderView === 'home' || this.props.gUserFolderView === 'recent') {
      this.props.gToggleModal();
      this.props.gModalUpdateContent(<DefaultModal message={'Select a folder first'} />);
    } else {
      let newNote = '/' + this.props.gUserFolderView + '/addNote';
      this.props.history.push(newNote);
    }
  }

  render () {
    let updateStyle = this.props.gNoteSaved ? styleSaved : styleUnsaved;
    return (
      <div class="note-icon-wrap">
        <div class="note-icon-wrap-bottom">
          <div class="note-icon-wrap-bottom-right">
            <div class="note-icon">
              <RaisedButton
                label="Create new Note"
                labelPosition="before"
                primary={true}
                icon={<ContentSave/>}
                onClick={() => this.createNote()}
              />
            </div>
            <div class="note-icon">
              <RaisedButton
                label="Create folder"
                labelPosition="before"
                primary={true}
                icon={<CreateNewFolder />}
                onClick={() => this.createFolder()}
              />
            </div>
            <div class="note-icon">
              <RaisedButton
                label="Saved"
                labelPosition="before"
                primary={true}
                overlayStyle={updateStyle}
                icon={<ContentSave />}
                onClick={() => this.saveNote()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    gNoteTitle: state.note.title,
    gNoteContent: state.note.content,
    gUserNoteView: state.user.noteView,
    gUserFolderView: state.user.folderView,
    gUserID: state.user.id,
    gNoteSaved: state.note.saved
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      gStartNoteSave: startNoteSave,
      gToggleModal: modalToggle,
      gModalUpdateContent: modalUpdateContent,
      gNoteUpdateSaveStatus: noteUpdateSaveStatus
    }, dispatch);
}

// enable browser history push for router from within a function
export default withRouter(connect(mapStateToProps, matchDispatchToProps)(NoteOptions));
