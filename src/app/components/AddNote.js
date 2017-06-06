import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { lerum } from './fakecontent';

import ReactDOM from 'react-dom';
import TextareaAutosize from 'react-autosize-textarea'; // https://github.com/buildo/react-autosize-textarea -> autoresizes textareas, requires react-dom


import Rodal from 'rodal';
import axios from 'axios';



export default
class AddNote extends React.Component {
  constructor(props) {
    super();

    if (props.noteID) {
      this.state = {
        noteTitle: 'note title ' + props.noteID,
        noteContent: 'note number '+props.noteID,
        noteID: props.noteID
      };
    }else {
      this.state = {
        noteTitle: '',
        noteContent: '',
        noteID: ''
      };
    }

    this.state.visible = false;
  }

  show() {
    this.setState({visible: true});
  }

  hide() {
    this.setState({visible: false});
  }

  saveNote() {
    axios.post('/saveNote.php', {
      noteTitle: this.state.noteTitle,
      noteContent: this.state.noteContent,
      noteID: this.state.noteID,
      timestamp: Date.now()
    })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  updateNoteTitle(event) {
    let title = event.target.value;
    this.setState(() => {
      return {
        noteTitle: title
      }
    });
  }

  updateNoteContent(event) {
    let content = event.target.value;
    this.setState(() => {
      return {
        noteContent: content
      }
    });
  }

  render() {
    console.log('showing content'); // !todo remove
    return (
        <Scrollbars
            autoHide={false}
            renderThumbVertical = {() =>
                <div style={{background: '#3b4245'}}/>
                }
        >
          <div class="note-wrapper">


            <Rodal
                visible={this.state.visible}
                onClose={this.hide.bind(this)}
                animation="zoom"
            >
              <div>Fill me up before releasing</div>
            </Rodal>

            <div class="note-title">
              <input type="text" class="note-title-textinput" placeholder="Click here to input title..." maxLength="50"
                  onChange={evt => this.updateNoteTitle(evt)} value={this.state.noteTitle} />
            </div>
            <div class="note-content">
              <TextareaAutosize class="note-text-textarea" placeholder="Click here to input content"
                  onResize={(e) => {}} onChange={evt => this.updateNoteContent(evt)} value={this.state.noteContent}/>
            </div>
          </div>
        </Scrollbars>
    );
  }
}