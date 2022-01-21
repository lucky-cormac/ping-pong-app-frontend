import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import configureStore, { history } from './configureStore';
import App from 'containers/App';

const store = configureStore();

const RootApp = () => (
  <Provider store={store}>
    <ReduxRouter history={history} store={store}>
      <App />
    </ReduxRouter>
  </Provider>
);

export default RootApp;
