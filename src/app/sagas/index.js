import { takeEvery } from 'redux-saga'; // listen for action, run them through worker sagas that perform asynchronous code
import { call, put } from 'redux-saga/effects'; // worker saga dependencies, dispatch actions
import axios from 'axios';

// handle actions, and dispatch result to the reducer
export function * fetchDataAsync (action) {
  try {
    // call -> attempting to fetch data
    // 1 arg-> function to use, 2nd -> parameters, 3nd -> objects to pass
    const response = yield call(axios.post, 'http://saafine.pe.hu/php/fetchFolders.php', {userID: action.payload}); // userID -> expected by PHP, payload -> prop passed from inital action
    // put -> dispatches an action with information from response
    yield put({type: 'COMPLETE_DATA_FETCH', payload: response.data});
  } catch (e) {
    // act on the error
    yield put({type: 'FAILED_DATA_FETCH'});
  }
}

export function * fetchContentAsync (action) {
  try {
    const response = yield call(axios.post, 'http://saafine.pe.hu/php/fetchNote.php', {userID: action.userID, noteID: action.noteID}); // !todo axios get;
    yield put({type: 'COMPLETE_CONTENT_FETCH', payload: response.data});
  } catch (e) {
    yield put({type: 'FAILED_CONTENT_FETCH'});
  }
}

export function * saveContentAsync (action) {
  try {
    let explodeAction = action.noteObject;
    const response = yield call(axios.post, 'http://saafine.pe.hu/php/saveNote.php', {...explodeAction});
    yield put({type: 'COMPLETE_DATA_FETCH', payload: response.data});
    // yield put({type: 'COMPLETE_NOTE_SAVE'}); // !todo should return new data object
  } catch (e) {
    yield put({type: 'FAILED_NOTE_SAVE'}); // !todo fix
  }
}

// action listener - watcher saga, handles every specified action
export function * watchFetchData () {
  yield takeEvery('START_DATA_FETCH', fetchDataAsync); // 1 arg -> action name to listen to, 2 arg -> run async function
}

export function * watchFetchContent () {
  yield takeEvery('START_CONTENT_FETCH', fetchContentAsync); // 1 arg -> action name to listen to, 2 arg -> run async function
}

export function * watchSaveContent () {
  yield takeEvery('START_NOTE_SAVE', saveContentAsync); // 1 arg -> action name to listen to, 2 arg -> run async function
}

// combine watcher sagas (action listeners)
export default function * rootSaga () {
  yield [ // combine sagas
    watchFetchData(),
    watchFetchContent(),
    watchSaveContent()
  ];
}
