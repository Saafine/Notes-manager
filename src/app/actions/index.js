export const changeName = (name) => {
  return {
    type: 'NAME_CHANGE_NAME',
    name // ES6 name:name
  };
};

export const changeNoteContent = (content) => {
  return {
    type: 'NOTE_CHANGE_CONTENT',
    content // ES6 name:name
  };
};