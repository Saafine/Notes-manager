import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import { active } from './library/helpers';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startDataFetch } from '../actions';

class LeftSection extends React.Component {
  componentWillMount () {
    this.props.getDataFetch('0');
  }

  renderFolders () {
    if (!this.props.gUserFolders) {
      return <div>Loading folders</div>;
    }
    return this.props.gUserFolders.map((folders, index) => {
      let toggleActive = active('/' + folders.link); // access helpers module from library and append 'active' class if current path location matches folder's link property
      return (
        <Link to={'/' + folders.link} key={index}>
          <li class={toggleActive}>
            <i class="fa fa-folder" aria-hidden="true"></i>
            <span>{folders.title}</span>
          </li>
        </Link>
      );
    });
  }

  render () {
    return (
      <Scrollbars
        autoHide={true}
        autoHideDuration={300}>
        <div class="sidebar-nav">
          <ul>
            <Link to="/">
              <li class={active('/')}>
                <i class="fa fa-home" aria-hidden="true"></i>
                <span>Home</span>
              </li>
            </Link>
            <Link to="/recent">
              <li class={active('/recent')}>
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <span>Recent</span>
              </li>
            </Link>
            <Link to="/trash">
              <li class={active('/trash')}>
                <i class="fa fa-trash" aria-hidden="true"></i>
                <span>Trash</span>
              </li>
            </Link>
            <hr/>
            {this.renderFolders()}
          </ul>
        </div>
      </Scrollbars>
    );
  }
}

// enable reading redux states
function mapStateToProps (state) {
  return {
    gUserFolders: state.data.userFolders
  };
}

// enable using action dispatches
function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      getDataFetch: startDataFetch
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LeftSection);