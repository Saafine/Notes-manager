import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux'; // !todo needed?
import createSagaMiddleware from 'redux-saga';
import { modalReducer, noteReducer, dataReducer } from '.././reducers/';
import rootSaga from '.././sagas';

export default function createStoreWithMiddleware (history, data) {
  // MY CODE
  let reducer = combineReducers({ // !todo reducers should be combined here
    note: noteReducer,
    modal: modalReducer,
    data: dataReducer
  });

  // sync dispatched route action tree history !todo needed?
  const reduxRouterMiddleware = routerMiddleware(history);

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [reduxRouterMiddleware, sagaMiddleware];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, data, composeEnhancers(
    applyMiddleware(...middleware),
  ));

  sagaMiddleware.run(rootSaga);

  return store;
}
