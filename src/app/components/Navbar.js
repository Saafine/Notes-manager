import React from 'react';
import Search from './library/Search';
import {active} from './library/helpers';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  render () {
    return (
      <nav>
        <ul class="align-left">
          <Link to="/">
            <li class={active('/') + ' clickable'}>
              <i class="fa fa-home" aria-hidden="true"></i><span class="hidden-xs-down">View All</span>
            </li>
          </Link>
          <li class="hidden-sm-down">
            /{this.props.gUserFolderView}
          </li>
        </ul>
        <ul class="align-right">
          <li class="clickable reset-padding">
            <Search />
          </li>
          <li class="clickable hidden-xs-down">
            <i class="fa fa-th" aria-hidden="true"></i>
          </li>
          <li class="clickable hidden-xs-down">
            <i class="fa fa-th-large" aria-hidden="true"></i>
          </li>
        </ul>
      </nav>
    );
  }
};

// enable reading redux states
function mapStateToProps (state) {
  return {
    gUserFolderView: state.user.folderView
  };
}

export default connect(mapStateToProps)(Navbar);
