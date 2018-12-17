export const filteredBooks = (arr, searchText) =>
  arr.filter(item => item.name.toLowerCase().includes(searchText));

export const sumQuantity = (booksSelected, id) => {
  const books = booksSelected.reduce(
    (acum, book) => (book.id === id ? [...acum, { ...book, quantity: book.quantity + 1 }] : [...acum, book ]),
    []
  );
  return books;
};

export const removeItem = (booksSelected, id) => booksSelected.filter(book => book.id !== id);
