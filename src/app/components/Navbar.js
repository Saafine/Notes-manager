import React from 'react';
import UserAvatar from './UserAvatar';
import {active} from './library/helpers';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends React.Component {
  render () {
    let getDir = '...';
    if (this.props.gUserFolders) {
      if (this.props.gUserFolderView === 'home') {
        getDir = 'home';
      } else if (this.props.gUserFolderView === 'recent') {
        getDir = 'recent';
      } else {
        if (!this.props.gUserFolders[this.props.gUserFolderView]) {
          getDir = 'folder deleted';
        } else {
          getDir = this.props.gUserFolders[this.props.gUserFolderView].title;
        }
      }
    }

    return (
      <nav>
        <ul class="align-left">
          <Link to="/">
            <li class={active('/') + ' clickable'}>
              <i class="fa fa-home" aria-hidden="true"></i><span class="hidden-xs-down">View All</span>
            </li>
          </Link>
          <li class="hidden-sm-down">
            /{getDir}
          </li>
        </ul>
        <ul class="align-right">
          <li class="clickable">
            <UserAvatar />
          </li>
        </ul>
      </nav>
    );
  }
}
;

function mapStateToProps (state) {
  return {
    gUserFolderView: state.user.folderView,
    gUserFolders: state.data.userFolders
  };
}

export default connect(mapStateToProps)(Navbar);
