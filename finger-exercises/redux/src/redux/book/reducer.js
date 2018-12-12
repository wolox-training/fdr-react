import { actions } from './actions';
import { filteredBooks, sumQuantity, removeItem } from './utils';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return { ...state, books: action.payload.books };
    case actions.ADD_TO_CART:
      return { ...state, bookSelected: [...state.bookSelected, action.payload.book] };
    case actions.ADD_ITEM:
      return { ...state, bookSelected: sumQuantity(state.bookSelected, action.payload.book) };
    case actions.REMOVE_ITEM:
      return { ...state, bookSelected: removeItem(state.bookSelected, action.payload.book) };
    case actions.SEARCH_ITEM:
      return { ...state, books: filteredBooks(state.books, action.payload.search) };
    default:
      return state;
  }
}

export default reducer;
