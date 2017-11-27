export function selectBook(book){
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  return {
    // type's value is always in uppercase, usually its string
    type: 'BOOK_SELECTED',
    payload: book
  };
}
