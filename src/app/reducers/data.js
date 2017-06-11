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