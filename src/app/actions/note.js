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
