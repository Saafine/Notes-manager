import { combineReducers } from 'redux';
import { dataReducer } from './data';
import { modalReducer } from './modal';
import { noteReducer } from './note';
import { userReducer } from './user';
import { loaderReducer } from './loader';

const reducer = combineReducers({
  note: noteReducer,
  modal: modalReducer,
  data: dataReducer,
  user: userReducer,
  loader: loaderReducer
});

export default reducer;