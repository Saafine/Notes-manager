let user = {
  id: '0', // !todo update
  folderView: undefined,
  noteView: undefined
};

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case 'USER_UPDATE_FOLDERVIEW':
      return {
        ...state,
        folderView: action.payload
      };
    case 'USER_UPDATE_NOTEVIEW':
      return {
        ...state,
        noteView: action.payload
      };
    default:
      return state;
  }
};
