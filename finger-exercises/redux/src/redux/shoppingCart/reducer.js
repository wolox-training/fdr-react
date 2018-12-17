import { actions } from './actions';

const initialState = {
  open: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHART_OPEN:
      return { ...state, open: true };
    case actions.CHART_CLOSE:
      return { ...state, open: false };
    default:
      return state;
  }
}

export default reducer;
