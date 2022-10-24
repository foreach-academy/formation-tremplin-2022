const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

function getTheTitles(arr) {
  return arr.map(function (book) {
    return book.title;
  });
}

console.log(getTheTitles(books));
