import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import TextareaAutosize from 'react-autosize-textarea'; // https://github.com/buildo/react-autosize-textarea -> autoresizes textareas, requires react-dom
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeNoteContent, changeNoteTitle, updateNoteID } from '../actions';

class OpenNote extends React.Component {
  constructor () {
    super();
    this.handleChangeNoteContent = this.handleChangeNoteContent.bind(this);
  }

  componentWillMount () {
    // if note id is specified as a prop inside a router, fetch note
    if (this.props.noteID) {
      this.props.gChangeNoteTitle('Fetching note title...');
      this.props.gChangeNoteContent('Fetching note content...');
      this.props.gUpdateNoteID(this.props.noteID);
      this.fetchNote();
    } else {
      this.props.gChangeNoteTitle('');
      this.props.gChangeNoteContent('');
      this.props.gUpdateNoteID('');
    }
  }

  fetchNote () {
    let noteId = this.props.noteID; // noteID is passed as a prop inside a router in RightSection
    let userID = '0'; // stateID to fetch !todo update
    let origin = window.location.origin; // !todo find better way, same in NoteOptions
    axios.post(origin + '/php/fetchNote.php', {
      userID: userID, // specify userID
      noteID: noteId // specify which note to fetch
    })
      .then((response) => {
        let data = response.data;
        this.props.gChangeNoteTitle(data.title);
        this.props.gChangeNoteContent(data.content);
      })
      .catch((error) => {
        console.log(error); // !todo check error handling
        this.props.gChangeNoteTitle('Failed to fetch a note :(');
        this.props.gChangeNoteContent('Try again later.');
      });
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

// enable reading redux states
function mapStateToProps (state) {
  return {
    gNoteID: state.note.id,
    gNoteTitle: state.note.title,
    gNoteContent: state.note.content
  };
}

// enable using action dispatches
function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      gChangeNoteTitle: changeNoteTitle,
      gChangeNoteContent: changeNoteContent,
      gUpdateNoteID: updateNoteID
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(OpenNote);
