import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import {Link} from 'react-router-dom';
import {active} from './library/helpers';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {modalToggle, modalUpdateContent} from '../actions';
import DeleteContent from './modal/DeleteContent';
import Loader from './library/Loader';

class LeftSection extends React.Component {
  renderFolders () {
    if (!this.props.gUserFolders) {
      return <div>Loading folders</div>;
    }

    let folders = [];
    let fTitle;
    let toggleActive;
    for (let folderID in this.props.gUserFolders) {
      fTitle = this.props.gUserFolders[folderID].title;
      // !todo change updating to state
      toggleActive = active('/' + folderID); // access helpers module from library and append 'active' class if current path location matches folder's link property
      folders.push(
        <Link to={'/' + folderID} key={folderID}>
          <li class={toggleActive}>
            <i class="fa fa-folder" aria-hidden="true"></i>
            <span>{fTitle}</span>
            <div class="trash-icon trash-folder" onClick={() => this.deleteFolder(folderID)}>
              <i class="fa fa-trash" aria-hidden="true"></i>
            </div>
          </li>
        </Link>
      );
    }

    return folders;
  }

  deleteFolder (folderID) {
    // promp user and ask if sure to delete
    this.props.modalToggle();
    this.props.modalUpdateContent(<DeleteContent userID={this.props.gUserID} ID={folderID} type={'folder'}/>);
  }

  render () { // !todo add trash
    return (
      <Loader loading={this.props.gLoadingFolders}>
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
              <hr/>
              {this.renderFolders()}
            </ul>
          </div>
        </Scrollbars>
      </Loader>
    );
  }
}

// enable reading redux states
function mapStateToProps (state) {
  return {
    gUserFolders: state.data.userFolders,
    gUserID: state.user.id,
    gLoadingFolders: state.loader.loadingFolders
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      modalToggle,
      modalUpdateContent
    }, dispatch);
}

// !todo temp solution, see https://github.com/reactjs/react-redux/blob/v4.0.0/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux
export default connect(mapStateToProps, matchDispatchToProps, null, {
  pure: false
})(LeftSection);