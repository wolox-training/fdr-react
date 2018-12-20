import { createStore, compose, combineReducers } from 'redux';

import books from './book/reducer';
import shoppingCart from './shoppingCart/reducer';

const reducers = combineReducers({
  books,
  shoppingCart
});

const rootReducer = (state, action) => reducers(state, action);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(rootReducer, composeEnhancers());
