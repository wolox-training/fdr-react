import { actions } from './actions';

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER:
      return { ...state };
    case actions.GET_USER_SUCCESS:
      return { ...state, user: action.payload[0], isLogged: true };
    case actions.GET_USER_FAILURE:
      return { ...state, err: action.payload, isLogged: false };
    default:
      return state;
  }
}

export default reducer;
