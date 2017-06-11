import { combineReducers } from 'redux';
import { dataReducer } from './data';
import { modalReducer } from './modal';
import { noteReducer } from './note';

const reducer = combineReducers({
  note: noteReducer,
  modal: modalReducer,
  data: dataReducer
});

export default reducer;