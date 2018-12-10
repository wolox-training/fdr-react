export const filteredBooks = (arr, searchText) =>
  arr.filter(item => item.name.toLowerCase().includes(searchText));

export const sumQuantity = (booksSelected, id) => {
  const item = booksSelected.find(book => book.id === id);
  item.quantity++; // eslint-disable-line no-plusplus
  const books = [...booksSelected].filter(book => book.id !== id);
  return [...books, item];
};
