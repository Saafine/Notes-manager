export const nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

let emptyNote = {
  noteTitle: '',
  noteContent: '',
  noteID: ''
};
export const noteReducer = (state = emptyNote, action) => {
  switch (action.type) {
    case 'CHANGE_NOTE_CONTENT':
      return action.noteContent;
    default:
      return state;
  }
};