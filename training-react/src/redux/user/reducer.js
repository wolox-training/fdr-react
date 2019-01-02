import { completeReducer, createReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  user: null
};

const reducerDescription = {
  primaryActions: [actions.GET_USER, actions.SET_USER],
  override: {
    [actions.SET_USER_SUCCESS]: (state, action) => {
      const user = [action.payload];
      return { ...state, user };
    }
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
