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

// DELETE FOLDER DATA
export const startContentDelete = (userID, deleteID, deleteWhat) => {
  return {
    type: 'START_FOLDER_DELETE',
    userID,
    deleteID,
    deleteWhat
  };
};