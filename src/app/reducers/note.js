let emptyNote = {
  title: '',
  content: '',
  saved: true
};

export const noteReducer = (state = emptyNote, action) => {
  switch (action.type) {
    case 'NOTE_CHANGE_TITLE':
      return {
        ...state,
        title: action.payload
      };
    case 'NOTE_CHANGE_CONTENT':
      return {
        ...state,
        content: action.payload
      };
    case 'COMPLETE_CONTENT_FETCH':
      return {
        ...state,
        title: action.payload.title,
        content: action.payload.content
      };
    case 'NOTE_UPDATE_SAVE_STATUS':
      return {
        ...state,
        saved: action.payload
      };
    default:
      return state;
  }
};
