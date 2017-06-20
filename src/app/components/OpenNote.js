import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import TextareaAutosize from 'react-autosize-textarea'; // https://github.com/buildo/react-autosize-textarea -> autoresizes textareas, requires react-dom
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  changeNoteContent,
  changeNoteTitle,
  startContentFetch,
  updateUserNoteView,
  updateUserFolderView,
  noteUpdateSaveStatus,
  loaderUpdateNotes
} from '../actions';

class OpenNote extends React.Component {
  componentWillMount () {
    this.props.gUpdateUserFolderView(this.props.folderID);
    this.props.gUpdateUserNoteView(this.props.noteID);
    if (this.props.noteID === 'addNote') {
      this.props.gNoteUpdateSaveStatus(false);
      this.props.gChangeNoteTitle('');
      this.props.gChangeNoteContent('');
    } else {
      this.props.gChangeNoteTitle('Loading title...');
      this.props.gChangeNoteContent('Loading content...');
      this.props.gNoteUpdateSaveStatus(true);
      this.props.gStartContentFetch(this.props.gUserID, this.props.noteID); // !todo this could be local
    }
  }

  handleChangeNoteTitle (evt) {
    this.props.gNoteUpdateSaveStatus(false);
    this.props.gChangeNoteTitle(evt.target.value);
  }

  handleChangeNoteContent (evt) {
    this.props.gNoteUpdateSaveStatus(false);
    this.props.gChangeNoteContent(evt.target.value);
  }

  render () {
    return (
      <Scrollbars
        autoHide={false}
        renderThumbVertical={() =>
          <div style={{background: '#3b4245'}}/>
        }
      >
          <div class="note-wrapper">
            <div class="note-title">
              <input type="text" id="note-send-title" class="note-title-textinput"
                     placeholder="Click here to input title..." maxLength="50" value={this.props.gNoteTitle}
                     onChange={evt => this.handleChangeNoteTitle(evt)}/>
            </div>
            <div class="note-content">
              <TextareaAutosize id="note-send-content" class="note-text-textarea"
                                placeholder="Click here to input content"
                                onResize={(evt) => {}} // !todo wtf
                                onChange={evt => this.handleChangeNoteContent(evt)}
                                value={this.props.gNoteContent}/>
            </div>
          </div>
      </Scrollbars>
    );
  }
}

function mapStateToProps (state) {
  return {
    gNoteTitle: state.note.title,
    gNoteContent: state.note.content,
    gUserID: state.user.id,
    gUserFolderView: state.user.folderView,
    gLoaderNoteContent: state.loader.loadingNoteContent
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      gChangeNoteTitle: changeNoteTitle,
      gChangeNoteContent: changeNoteContent,
      gStartContentFetch: startContentFetch,
      gUpdateUserNoteView: updateUserNoteView,
      gUpdateUserFolderView: updateUserFolderView,
      gNoteUpdateSaveStatus: noteUpdateSaveStatus
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(OpenNote);