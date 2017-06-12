// NOTE TITLE AND CONTENT
// -------------------------------------------------
export const changeNoteTitle = (payload) => {
  return {
    type: 'NOTE_CHANGE_TITLE',
    payload // ES6 name:name
  };
};

export const changeNoteContent = (payload) => {
  return {
    type: 'NOTE_CHANGE_CONTENT',
    payload
  };
};
// #################################################

// MODAL
// -------------------------------------------------
export const toggleModal = () => {
  return {
    type: 'MODAL_TOGGLE'
  };
};
// #################################################

// USERS
// -------------------------------------------------
export const updateUserNoteView = (payload) => {
  return {
    type: 'USER_UPDATE_NOTEVIEW',
    payload
  };
};

export const updateUserFolderView = (payload) => {
  return {
    type: 'USER_UPDATE_FOLDERVIEW',
    payload
  };
};

// #################################################

// Asynchronous data actions handled by redux saga
// -------------------------------------------------

// FETCH FOLDERS AND DOCUMENTS DATA
export const startDataFetch = (payload) => { // payload is userID
  return {
    type: 'START_DATA_FETCH',
    payload
  };
};

// FETCH NOTE CONTENT
export const startContentFetch = (userID, noteID) => {
  return {
    type: 'START_CONTENT_FETCH',
    userID,
    noteID
  };
};

// SAVE NOTE DATA
export const startNoteSave = (noteObject) => {
  return {
    type: 'START_NOTE_SAVE',
    noteObject
  };
};
// #################################################
