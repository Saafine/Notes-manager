import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'; // !todo cleanup
import axios from 'axios';
import { connect } from 'react-redux';
import { getNoteContent } from '../actions';

let addIcon = require('.././vendor/icons/add-green.svg');
let saveIcon = require('.././vendor/icons/save-green.svg');

class NoteOptions extends React.Component {
  constructor () {
    super();
    this.saveNote = this.saveNote.bind(this);
  }

  saveNote () {
    console.log(this.props.noteContent);
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
  componentWillReceiveProps(nextProps){
    alert('hey');
  }

  render () {
    // specifies to which folder, the addNote icon will point to. In case of root path '/', it will point to '/home'
    let specifyFolder = (location.pathname) === '/' ? 'home/addNote' : location.pathname + '/addNote';
    return (
      <Switch>
        <Route path="/trash"/>
        <Route path="/:folder"
               render={() => (
                 <div class="note-icon">
                   <img onClick={this.saveNote} src={saveIcon} alt="save-icon"/>
                 </div>
               )}
        />
        <Route path="/"
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
      </Switch>
    );
  }
}

// enable reading redux states
function mapStateToProps (state) {
  return {
    noteContent: state.noteContent
  };
}

// export default connect(mapStateToProps)(NoteOptions);
export default NoteOptions;
