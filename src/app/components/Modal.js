import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { modalToggle } from '../actions';
import Rodal from 'rodal';

class Modal extends React.Component {
  constructor () {
    super();
    this.toggle = this.toggle.bind(this);
  }

  toggle () {
    this.props.gModalToggle();
  }

  render () {
    return (
      <Rodal
        visible={this.props.gModalVisible}
        onClose={this.toggle}
        animation="zoom"
        height={this.props.gModalHeight}
        width={this.props.gModalWidth}
      >
        <div class="expand-height">{this.props.gModalContent}</div>
      </Rodal>
    );
  }
}

// enable reading redux states
function mapStateToProps (state) {
  return {
    gModalVisible: state.modal.visible,
    gModalContent: state.modal.content,
    gModalHeight: state.modal.height,
    gModalWidth: state.modal.width
  };
}

// enable using action dispatches
function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      gModalToggle: modalToggle
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Modal);
