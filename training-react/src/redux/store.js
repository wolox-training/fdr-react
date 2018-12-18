import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';

import users from './user/reducer';

const reducers = combineReducers({
  form: formReducer,
  users
});

const rootReducer = (state, action) => reducers(state, action);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, fetchMiddleware)));
