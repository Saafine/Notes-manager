let emptyNote = {
  title: '',
  content: '',
  saved: true // !todo useless
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
    case 'NOTE_UPDATE_ID':
      return {
        ...state,
        id: action.payload
      };
    case 'COMPLETE_NOTE_SAVE':
      return {
        ...state,
        saved: true
      };
    case 'FAILED_NOTE_SAVE':
      return {
        ...state,
        saved: false
      };
    default:
      return state;
  }
};
