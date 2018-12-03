import { actions } from './actions';

const initialState = {
  open: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_OPEN:
      return { ...state, open: action.payload.isOpen };
    case actions.GET_CLOSE:
      return { ...state, open: action.payload.isClose };
    default:
      return state;
  }
}

export default reducer;
