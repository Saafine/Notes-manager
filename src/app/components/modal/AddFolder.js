import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { dataUpdateUserFolders, modalToggle, modalChangeDimensions } from '../../actions';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin'; // !todo it fixes https://github.com/callemall/material-ui/issues/4670
injectTapEventPlugin(); // !todo see above

class AddFolder extends React.Component {
  constructor () {
    super();
    this.createFolder = this.createFolder.bind(this);
    this.state = {
      newFolderName: '',
      hint: '',
      hintDisplay: 'none'
    };
  }

  componentWillMount () {
    this.props.gModalChangeDimensions(250, 350);
  }

  createFolder () {
    let newFolderCharsLength = this.state.newFolderName.length;
    if (newFolderCharsLength === 0) {
      this.setState(() => {
        return {
          hint: 'Minimum number of characters: 1',
          hintDisplay: 'block'
        };
      });
      return;
    }

    axios.post('http://saafine.pe.hu/php/saveFolder.php', { // !todo fix origin
      userID: this.props.gUserID,
      newFolderName: this.state.newFolderName
    })
      .then((response) => {
        this.props.gDataUpdateUserFolders(response.data);
      })
      .catch(() => {
        this.setState(() => {
          return {
            hint: 'Folder insertion failed, try again later',
            hintDisplay: 'block'
          };
        });
      });
    this.props.gModalToggle();
  }

  handleChange (e) {
    let newValue = e.target.value;
    this.setState(() => {
      return {
        newFolderName: newValue
      };
    });
  }

  render () {
    return (
      <div class="modal-wrapper">
        <div class="modal-title">New folder</div>
        <div class="modal-body">
          <TextField
            value={this.state.newFolderName}
            onChange={(evt) => this.handleChange(evt)}
            floatingLabelText="Enter new folder name"
            maxLength={50}
            fullWidth={true}
          />
          <div class="modal-hint" style={{display: this.state.hintDisplay}}>{this.state.hint}</div>
        </div>
        <RaisedButton label="Save" class="modal-button" onClick={this.createFolder}/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    gUserID: state.user.id
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      gDataUpdateUserFolders: dataUpdateUserFolders,
      gModalToggle: modalToggle,
      gModalChangeDimensions: modalChangeDimensions
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddFolder);
