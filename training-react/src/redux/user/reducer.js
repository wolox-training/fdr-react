import { completeReducer, createReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  user: null
};

const reducerDescription = {
  primaryActions: [actions.GET_USER, actions.SET_USER]
};

export default createReducer(initialState, completeReducer(reducerDescription));
