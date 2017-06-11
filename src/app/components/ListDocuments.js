import React from 'react';
import { Link } from 'react-router-dom'; // !todo cleanup
import { connect } from 'react-redux';
let folder = require('.././vendor/icons/document-green.svg');

// import { userFolders, userFoldersAJAX } from './userFolders';

class ListDocuments extends React.Component {
  renderNotes () {
    let gUserFolders = this.props.gUserFolders;
    let folderID = this.props.folderID;
    let docsObj = gUserFolders[folderID]['documents'];
    let docs = [];
    let docTitle;

    for (let documentID in docsObj) {
      docTitle = docsObj[documentID]['title'];
      docs.push(
        <div class="container-folder" key={documentID}>
          <Link to={'/' + folderID + '/' + documentID}>
            <img class="img-folder" src={folder}/>
            <div class="description-folder">{docTitle}</div>
          </Link>
        </div>
      );
    }

    return docs;
  }

  // !todo cleanup
  render () {
    return (
      <div>
        {this.renderNotes()}
      </div>
    );
  }
}

// enable reading redux states
function mapStateToProps (state) {
  return {
    gUserFolders: state.data.userFolders
  };
}

// !todo temp solution, see https://github.com/reactjs/react-redux/blob/v4.0.0/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux
export default connect(mapStateToProps, null, null, {
  pure: false
})(ListDocuments);
