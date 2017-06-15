import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserFolderView, startContentDelete, modalToggle, modalUpdateContent } from '../actions';
import DeleteContent from '../components/modal/DeleteContent';
let folder = require('.././vendor/icons/document-green.svg');

class ListDocuments extends React.Component {
  // this fires when ListDocuments is mounted as a replacement for note editor
  componentWillMount () {
    this.props.gUpdateUserFolderView(this.props.folderID);
  }

  // this fires when folders are switched in Left Section Tab
  componentDidUpdate () {
    this.props.gUpdateUserFolderView(this.props.folderID);
  }

  getDocuments (openedFolders) { // expected: array of folder IDs that exist
    let userData = this.props.gUserFolders;
    let documents = [];
    let eachFolderDocs, docTitle, docTimestamp;

    // usually runs once, just for specified ID
    for (let eachFolderID of openedFolders) {
      eachFolderDocs = userData[eachFolderID]['documents'];
      // put all documents from specified folder(s) into 1 array of objects
      for (let eachDocumentID in eachFolderDocs) {
        // debugger;
        docTitle = eachFolderDocs[eachDocumentID]['title'];
        docTimestamp = eachFolderDocs[eachDocumentID]['timestamp'];
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
      return parseInt(b.timestamp) - parseInt(a.timestamp);
    });
  }

  deleteNote (noteID) {
    // promp user and ask if sure to delete
    this.props.gModalToggle();
    this.props.gModalUpdateContent(<DeleteContent userID={this.props.gUserID} ID={noteID} type={'note'} />);
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
        <div class="trash-icon trash-document" onClick={() => this.deleteNote(doc.id)}><i class="fa fa-trash" aria-hidden="true"></i></div>
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
    gUserFolders: state.data.userFolders,
    gUserID: state.user.id
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      gUpdateUserFolderView: updateUserFolderView,
      gStartContentDelete: startContentDelete,
      gModalToggle: modalToggle,
      gModalUpdateContent: modalUpdateContent
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ListDocuments);
