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