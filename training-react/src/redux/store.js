import { createStore, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  form: formReducer
});

const rootReducer = (state, action) => reducers(state, action);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(rootReducer, composeEnhancers());
