import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import TextareaAutosize from 'react-autosize-textarea'; // https://github.com/buildo/react-autosize-textarea -> autoresizes textareas, requires react-dom

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  changeNoteContent,
  changeNoteTitle,
  updateNoteID,
  startContentFetch,
  updateUserNoteView,
  updateUserFolderView
} from '../actions';

class OpenNote extends React.Component {
  constructor () {
    super();
    this.handleChangeNoteContent = this.handleChangeNoteContent.bind(this);
  }

  componentWillMount () {
    // update current folder view, current note view
    this.props.gUpdateUserNoteView(this.props.noteID);
    this.props.gUpdateUserFolderView(this.props.folderID);
    //
    // this.props.gChangeNoteTitle('');
    // this.props.gChangeNoteContent('');
    this.props.gStartContentFetch('0', this.props.noteID); // !todo fix user
  }

  handleChangeNoteTitle (evt) {
    this.props.gChangeNoteTitle(evt.target.value);
  }

  handleChangeNoteContent (evt) {
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
    gNoteID: state.note.id,
    gNoteTitle: state.note.title,
    gNoteContent: state.note.content
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      gChangeNoteTitle: changeNoteTitle,
      gChangeNoteContent: changeNoteContent,
      gUpdateNoteID: updateNoteID,
      gStartContentFetch: startContentFetch,
      gUpdateUserNoteView: updateUserNoteView,
      gUpdateUserFolderView: updateUserFolderView
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(OpenNote);
