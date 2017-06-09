import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
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
      >
        <div>{this.props.gModalContent}</div>
      </Rodal>
    );
  }
}

// enable reading redux states
function mapStateToProps (state) {
  return {
    gModalVisible: state.modal.visible,
    gModalContent: state.modal.content
  };
}

// enable using action dispatches
function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      gModalToggle: toggleModal
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Modal);
