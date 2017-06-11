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

export const updateNoteID = (payload) => {
  return {
    type: 'NOTE_UPDATE_ID',
    payload
  };
};

export const toggleModal = () => {
  return {
    type: 'MODAL_TOGGLE'
  };
};

// Asynchronous data actions handled by redux saga
// -------------------------------------------------
export const startDataFetch = (payload) => { // payload is userID
  return {
    type: 'START_DATA_FETCH',
    payload
  };
};
// #################################################
