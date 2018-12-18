import { completeReducer, createReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  user: null
};

const reducerDescription = {
  primaryActions: [actions.GET_USER, actions.SET_USER],
  override: {
    [actions.GET_USER_SUCCESS]: (state, action) => ({ ...state, user: action.payload[0] })
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
