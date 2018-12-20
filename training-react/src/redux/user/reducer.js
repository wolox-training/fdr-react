import { completeReducer, createReducer } from 'redux-recompose';

import { actions } from './actions';

const USER_SESSION = 'USER_SESSION';

const initialState = {
  user: null
};

const reducerDescription = {
  primaryActions: [actions.GET_USER, actions.SET_USER],
  override: {
    [actions.GET_USER_SUCCESS]: (state, action) => {
      const user = action.payload[0];
      localStorage.setItem(USER_SESSION, JSON.stringify(user));
      return { ...state, user };
    }
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
