import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

function WrappedAppWithRedux() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

import App from '~components/App'; // eslint-disable-line import/first

ReactDOM.render(<WrappedAppWithRedux />, document.getElementById('root'));
registerServiceWorker();
