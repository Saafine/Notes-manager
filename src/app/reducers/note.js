let emptyNote = {
  title: '',
  content: '',
  id: ''
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
    case 'NOTE_UPDATE_ID':
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
