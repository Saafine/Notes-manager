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
        visible: !state.visible // this is not an action, so no payload property
      };
    default:
      return state;
  }
};

// FETCHING DATA FROM THE DATABASE, ASYNCHRONOUS
// ------------------------------------------------
let data = {
  isFetching: false,
  userFolders: undefined // !todo switch to undefined
};

export const dataReducer = (state = data, action) => {
  switch (action.type) {
    case ('START_DATA_FETCH'): // action listener in redux saga
      return {
        isFetching: true,
        userFolders: undefined // !todo switch to undefined
      };
    case ('COMPLETE_DATA_FETCH'): // resolved by redux-saga
      return {
        isFetching: false,
        userFolders: action.payload
      };
    case ('FAILED_DATA_FETCH'): // resolved by redux-saga
      console.log('Failed to fetch data');
      return {
        isFetching: false,
        userFolders: undefined
      };
    default:
      return state;
  }
};
// #################################################
