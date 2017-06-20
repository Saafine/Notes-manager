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