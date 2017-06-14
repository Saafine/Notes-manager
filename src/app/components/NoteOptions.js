import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'; // !todo cleanup
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startNoteSave, modalToggle, modalUpdateContent, noteUpdateSaveStatus } from '../actions';
import AddFolder from './modal/AddFolder';

import RaisedButton from 'material-ui/RaisedButton';
import ContentSave from 'material-ui/svg-icons/content/save';

const styleSaved = {backgroundColor: '#0e9342'};
const styleUnsaved = {backgroundColor: '#ff001f'};

class NoteOptions extends React.Component {
  saveNote () {
    if (this.props.gNoteSaved) {
      alert('already saved');
      return;
    }

    let getTimestamp = Date.now();
    let noteObject = {
      title: this.props.gNoteTitle,
      content: this.props.gNoteContent,
      folderID: this.props.gUserFolderView,
      noteID: this.props.gUserNoteView,
      userID: this.props.gUserID,
      timestamp: getTimestamp
    };

    this.props.gStartNoteSave(noteObject); // !todo it should: disallow another save and return saved status
  }

  createFolder () {
    this.props.gToggleModal();
    this.props.gModalUpdateContent(<AddFolder />);
  }

  render () {
    let updateStyle = this.props.gNoteSaved ? styleSaved : styleUnsaved;
    return (
      <div class="note-icon-wrap">
        <div class="note-icon-wrap-bottom">
          <div class="note-icon-wrap-bottom-right">
            <div class="note-icon">
              <Link to={'/' + this.props.gUserFolderView + '/addNote'}>
                <RaisedButton
                  label="Create new Note"
                  labelPosition="before"
                  primary={true}
                  icon={<ContentSave/>}
                />
              </Link>
            </div>
            <div class="note-icon">
              <RaisedButton
                label="Create folder"
                labelPosition="before"
                primary={true}
                icon={<ContentSave />}
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

export default connect(mapStateToProps, matchDispatchToProps)(NoteOptions);
