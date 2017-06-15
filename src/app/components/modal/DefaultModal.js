import React from 'react';
import {connect} from 'react-redux';
import {modalChangeDimensions, modalToggle} from '../../actions';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';

const styleButtons = {
  marginTop: '50px',
  textAlign: 'center'
};

class DeleteContent extends React.Component {
  componentWillMount () {
    this.props.gModalChangeDimensions(200, 300);
  }

  render () {
    return (
      <div class="modal-wrapper">
        <div class="modal-title">{this.props.message}</div>
        <div style={styleButtons}>
          <RaisedButton label="Okay" primary={true} onClick={() => this.props.gModalToggle()}/>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      gModalChangeDimensions: modalChangeDimensions,
      gModalToggle: modalToggle
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(DeleteContent);
