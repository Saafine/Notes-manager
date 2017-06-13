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

export const noteUpdateSaveStatus = (payload) => {
  return {
    type: 'NOTE_UPDATE_SAVE_STATUS',
    payload
  };
};
// #################################################

// MODAL
// -------------------------------------------------
export const modalToggle = () => {
  return {
    type: 'MODAL_TOGGLE'
  };
};

export const modalUpdateContent = (payload) => {
  return {
    type: 'MODAL_CHANGE_CONTENT',
    payload
  };
};

export const modalChangeDimensions = (height, width) => { // !todo not used
  return {
    type: 'MODAL_CHANGE_DIMENSIONS',
    height,
    width
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

// DATA
// -------------------------------------------------
export const dataUpdateUserFolders = (payload) => { // payload is an object
  return {
    type: 'DATA_UPDATE_USERFOLDERS',
    payload
  };
};
// #################################################

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
