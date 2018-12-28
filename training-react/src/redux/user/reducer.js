import { actions } from './actions';

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER:
      return { ...state };
    case actions.GET_USER_SUCCESS:
      return { ...state, user: action.payload.user };
    case actions.GET_USER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default reducer;
