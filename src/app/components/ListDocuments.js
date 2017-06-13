import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let folder = require('.././vendor/icons/document-green.svg');

class ListDocuments extends React.Component {
  getDocuments (openedFolders) { // expected: array of folder IDs that exist
    let userData = this.props.gUserFolders;
    let documents = [];
    let eachFolderDocs, docTitle, docTimestamp, docID;

    // usually runs once, just for specified ID
    for (let eachFolderID of openedFolders) {
      eachFolderDocs = userData[eachFolderID]['documents'];
      // put all documents from specified folder(s) into 1 array of objects
      for (let eachDocumentID in eachFolderDocs) {
        // debugger;
        docTitle = eachFolderDocs[eachDocumentID]['title'];
        docTimestamp = eachFolderDocs[eachDocumentID]['timestamp'];
        docID = eachFolderDocs[eachDocumentID]['id'];
        documents.push(
          {
            id: eachDocumentID,
            title: docTitle,
            timestamp: docTimestamp,
            folderID: eachFolderID
          }
        );
      }
    }
    return documents;
  }

  getOpenedFolders (dir) {
    let userData = this.props.gUserFolders;
    let openedFolders = [];

    for (let eachFolderID in userData) {
      if (dir === 'home' || dir === 'recent') {
        openedFolders.push(eachFolderID);
      } else if (dir === eachFolderID) {
        openedFolders.push(eachFolderID);
        break;
      } // !todo add trash
    }
    return openedFolders;
  }

  sortByTimestamp (arrayToSort) { // no need to return -> sort is mutating existing array
    arrayToSort.sort((a, b) => {
      return a.timestamp - b.timestamp;
    });
  }

  renderDocuments () {
    if (!this.props.gUserFolders) { // wait for data before rendering
      return;
    }
    let folderID = this.props.folderID;
    let openedFolders = this.getOpenedFolders(folderID);
    let docs = this.getDocuments(openedFolders);

    if (folderID === 'recent') {
      this.sortByTimestamp(docs); // no need to return -> sort is mutating existing array
    }

    return docs.map((doc) => {
      return (<div class="container-folder" key={doc.id}>
        <Link to={'/' + doc.folderID + '/' + doc.id}>
          <img class="img-folder" src={folder}/>
          <div class="description-folder">{doc.title}</div>
        </Link>
      </div>);
    });
  }

  render () {
    return (
      <div>
        {this.renderDocuments()}
      </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    gUserFolders: state.data.userFolders
  };
}

// !todo temp solution, see https://github.com/reactjs/react-redux/blob/v4.0.0/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux
export default connect(mapStateToProps, null, null, {
  pure: false
})(ListDocuments);
