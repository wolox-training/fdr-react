import React from 'react';
import ReactDOM from 'react-dom';
import App from '@screens/App';

import { GET_BOOKS } from './redux/book/actions';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
