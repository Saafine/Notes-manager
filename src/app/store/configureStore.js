const redux = require('redux');
const {modalReducer, noteReducer} = require('.././reducers/');

export let configure = () => {
  let reducer = redux.combineReducers({
    note: noteReducer,
    modal: modalReducer
  });

  let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};