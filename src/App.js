import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import configureStore, { history } from './configureStore';
import App from 'containers/App';

const store = configureStore();

const RootApp = () => (
  <Provider store={store}>
    <ReduxRouter history={history} store={store}>
      <App />
      <ReduxToastr timeOut={4000} preventDuplicates closeOnToastrClick />
    </ReduxRouter>
  </Provider>
);

export default RootApp;
