import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeName } from '../actions';

class LbsTest extends React.Component {
  changeAction () {
    this.props.getChangeName('abc');
  };

  render () {
    return (
      <div>
        <button onClick={this.changeAction.bind(this)}>Click me</button>
        {this.props.users}
      </div>
    );
  }
}

// enable reading redux states
function mapStateToProps (state) {
  return {
    users: state.name // users is the name of the prop you want to use. Name -> is taken from reducer
  };
}

// enable using action dispatches
function matchDispatchToProps (dispatch) {
  return bindActionCreators({getChangeName: changeName}, dispatch);
}

// mapStateToProps -> connect to redux's store so that component can read props.
// matchDispatchToProps -> connect to redux's store so that component can write props.
export default connect(mapStateToProps, matchDispatchToProps)(LbsTest);
