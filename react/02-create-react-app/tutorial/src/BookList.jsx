import Book from './Book';
import { books } from './books';

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

export default BookList;
