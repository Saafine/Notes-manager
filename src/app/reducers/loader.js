let loader = {
  loadingFolders: false,
  loadingNoteContent: false
};

export const loaderReducer = (state = loader, action) => {
  switch (action.type) {
    case ('LOADER_LOADING_FOLDERS'):
      return {
        ...state,
        loadingFolders: action.payload
      };
    case ('LOADER_LOADING_NOTES'):
      return {
        ...state,
        loadingNoteContent: action.payload
      };
    default:
      return state;
  }
};