import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { modalChangeDimensions, modalToggle, startContentDelete } from '../../actions';
import { bindActionCreators } from 'redux';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import injectTapEventPlugin from 'react-tap-event-plugin'; // !todo it fixes https://github.com/callemall/material-ui/issues/4670
// injectTapEventPlugin(); // !todo see above
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  float: 'right'
};

const styleBody = {
  textAlign: 'center'
};

const styleButtons = {
  marginTop: '20px'
};

class DeleteContent extends React.Component {
  componentWillMount () {
    this.props.gModalChangeDimensions(200, 300);
  }

  deleteContent () {
    this.props.gStartContentDelete(this.props.userID, this.props.ID, this.props.type);
    this.props.gModalToggle();
  }

  render () {
    return (
      <div class="modal-wrapper">
        <div class="modal-title">DELETE FOLDER</div>
        <div class="modal-body" style={styleBody}>
          Are you sure?
        </div>
        <div style={styleButtons}>
          <RaisedButton label="Yes" primary={true} style={style} onClick={() => this.deleteContent()}/>
          <RaisedButton label="No" secondary={true} onClick={this.props.gModalToggle}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    // gUserID: state.user.id
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      gModalChangeDimensions: modalChangeDimensions,
      gModalToggle: modalToggle,
      gStartContentDelete: startContentDelete
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DeleteContent);
