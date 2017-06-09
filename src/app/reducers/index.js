// export const userReducer = (state = emptyNote, action) => {
//   switch (action.type) {
//     case 'NOTE_CHANGE_TITLE':
//       return {
//         ...state,
//         title: action.title
//       };
//     case 'NOTE_CHANGE_CONTENT':
//       return {
//         ...state,
//         content: action.content
//       };
//     default:
//       return state;
//   }
// };

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

let emptyModal = {
  content: '',
  visible: false
};

export const modalReducer = (state = emptyModal, action) => {
  switch (action.type) {
    case 'MODAL_CHANGE_CONTENT':
      return {
        ...state,
        content: action.payload
      };
    case 'MODAL_TOGGLE':
      return {
        ...state,
        visible: !state.visible
      };
    default:
      return state;
  }
};