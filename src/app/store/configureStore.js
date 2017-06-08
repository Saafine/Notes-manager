const redux = require('redux');
const {nameReducer, noteReducer} = require('.././reducers/');

export let configure = () => {
  let reducer = redux.combineReducers({
    name: nameReducer,
    note: noteReducer
  });

  let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};