import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import createRootReducer from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(applyMiddleware(routerMiddleware, sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
