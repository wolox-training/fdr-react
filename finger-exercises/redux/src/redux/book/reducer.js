import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return { ...state, books: action.payload };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return { ...state };
    case actions.ADD_ITEM: // TODO to implement the logic
      return { ...state };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return { ...state };
    case actions.SEARCH_ITEM:
      const result = state.books.filter(item => 
        item.name.toLowerCase().includes(action.payload)       
      );   
      return { ...state, books: result };
    default:
      return state;
  }
}

export default reducer;
