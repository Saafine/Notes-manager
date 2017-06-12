import { combineReducers } from 'redux';
import { dataReducer } from './data';
import { modalReducer } from './modal';
import { noteReducer } from './note';
import { userReducer } from './user';

const reducer = combineReducers({
  note: noteReducer,
  modal: modalReducer,
  data: dataReducer,
  user: userReducer
});

export default reducer;