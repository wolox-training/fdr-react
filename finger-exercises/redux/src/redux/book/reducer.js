import { actions } from './actions';
import { filteredBooks, sumQuantity } from './utils';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

const removeItem = (booksSelected, id) => booksSelected.filter(book => book.id !== id);

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return { ...state, books: action.payload };
    case actions.ADD_TO_CART:
      return { ...state, bookSelected: [...state.bookSelected, action.payload] };
    case actions.ADD_ITEM:
      return { ...state, bookSelected: sumQuantity(state.bookSelected, action.payload) };
    case actions.REMOVE_ITEM:
      return { ...state, bookSelected: removeItem(state.bookSelected, action.payload) };
    case actions.SEARCH_ITEM:
      return { ...state, books: filteredBooks(state.books, action.payload) };
    default:
      return state;
  }
}

export default reducer;
