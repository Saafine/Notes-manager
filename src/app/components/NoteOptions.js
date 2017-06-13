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
  constructor () {
    super();
    this.saveNote = this.saveNote.bind(this);
    this.createFolder = this.createFolder.bind(this);
  }

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
    // specifies to which folder, the addNote icon will point to. In case of root path '/', it will point to '/home'
    let specifyFolder = (location.pathname) === '/' ? 'home/addNote' : location.pathname + '/addNote';
    let updateStyle = this.props.gNoteSaved ? styleSaved : styleUnsaved;

    return (
      <div class="note-icon-wrap">
        <div class="note-icon-wrap-bottom">
          <div class="note-icon-wrap-bottom-right">
            <div class="note-icon">
              <Link to={this.props.gUserFolderView + '/addNote'}>
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
                onClick={this.createFolder}
              />
            </div>
            <div class="note-icon">
              <RaisedButton
                label="Saved"
                labelPosition="before"
                primary={true}
                overlayStyle={updateStyle}
                icon={<ContentSave />}
                onClick={this.saveNote}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// enable reading redux states
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

// enable using action dispatches
function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      gStartNoteSave: startNoteSave,
      gToggleModal: modalToggle,
      gModalUpdateContent: modalUpdateContent,
      gNoteUpdateSaveStatus: noteUpdateSaveStatus
    }, dispatch);
}

// !todo temp solution, see https://github.com/reactjs/react-redux/blob/v4.0.0/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux
export default connect(mapStateToProps, matchDispatchToProps, null, {
  pure: false
})(NoteOptions);
