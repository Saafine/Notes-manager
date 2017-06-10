import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startDataFetch } from '../actions';

class Data extends React.Component {
  constructor () {
    super();
    this.test = this.test.bind(this);
  }

  test () {
    this.props.getDataFetch('0');
  }

  render () {
    return (
      <button onClick={this.test.bind(this)}>Click me to fetch data</button>
    );
  }
}

// enable reading redux states
function mapStateToProps (state) {
  return {
    globalName: state.name,
    globalNoteTitle: state.note.title,
    globalNoteContent: state.note.content,
    globalNoteID: state.note.ID
  };
}

// enable using action dispatches
function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      getDataFetch: startDataFetch
    }, dispatch);
}

// !todo temp solution, see https://github.com/reactjs/react-redux/blob/v4.0.0/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux
export default connect(mapStateToProps, matchDispatchToProps)(Data);
