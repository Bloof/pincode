import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { pincodeReducer } from "./reducers/pincodeReducer";
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
  return createStore(
      pincodeReducer,
      applyMiddleware(sagaMiddleware)
  );
}
export const store = configureStore();

sagaMiddleware.run(rootSaga);
