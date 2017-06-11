import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '.././reducers';
import rootSaga from '.././sagas';

export default function createStoreWithMiddleware () {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware]; // add more middleware here

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  return store;
}
