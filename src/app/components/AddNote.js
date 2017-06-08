import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import TextareaAutosize from 'react-autosize-textarea'; // https://github.com/buildo/react-autosize-textarea -> autoresizes textareas, requires react-dom
import axios from 'axios';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { changeNoteContent, changeName } from '../actions';

class AddNote extends React.Component {
  constructor () {
    super();
    this.title = 'Example title';
    this.content = 'Example content';
  }

  componentWillMount () {
    // console.log('updating note id');
    this.fetchNote();
  }

  fetchNote () {
    // console.log(this.props); // router passes current folder and id
    return;
    // propsID to fetch
    let data;
    axios.post('php/fetchNote.php', {
      noteID: this.props.noteID // specify which note to fetch
    })
      .then(function (response) {
        data = JSON.parse(response);
        this.title = data.title;
        this.content = data.content;
      })
      .catch(function (error) {
        console.log(error);
      });
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
                   placeholder="Click here to input title..." maxLength="50"
                   onChange={evt => this.updateNoteTitle(evt)} value={this.title}/>
          </div>
          <div class="note-content">
            <TextareaAutosize id="note-send-content" class="note-text-textarea"
                              placeholder="Click here to input content"
                              onResize={(e) => {}}
                              value={this.content}/>
          </div>
        </div>
      </Scrollbars>
    );
  }
}

// enable reading redux states
// function mapStateToProps (state) {
//   return {
//     gName: state.name,
//     gNoteID: state.note.ID
//   };
// }
//
// // enable using action dispatches
// function matchDispatchToProps (dispatch) {
//   return bindActionCreators(
//     {
//       getChangeName: changeName,
//       getChangeNoteContent: changeNoteContent
//     }, dispatch);
// }

// !todo temp solution, see https://github.com/reactjs/react-redux/blob/v4.0.0/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux
// export default connect(mapStateToProps, matchDispatchToProps)(AddNote);
export default AddNote;

// import Rodal from 'rodal';
//
//
// this.state.visible = false; Constructor
// <Rodal
//   visible={this.state.visible}
//   onClose={this.hide.bind(this)}
//   animation="zoom"
// >
//   <div>Fill me up before releasing</div>
// </Rodal>
// show () {
//   this.setState({visible: true});
// }
//
// hide () {
//   this.setState({visible: false});
// }
