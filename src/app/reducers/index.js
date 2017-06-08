export const nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'NAME_CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

let emptyNote = {
  title: 'this is unchanged title',
  content: 'XXXXXXXXXXXXXXXXXX',
  ID: 'this is unchanged id'
};

export const noteReducer = (state = emptyNote, action) => {
  switch (action.type) {
    case 'NOTE_CHANGE_CONTENT':
      console.log(action.content);
      return {
        ...state,
        content: action.content
      };
    default:
      return state;
  }
};