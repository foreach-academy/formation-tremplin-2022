const Book = ({ img, title, author }) => {
  const handleClick = (e) => {
    console.log(e.target);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h2 onMouseOver={() => console.log(title)}>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <button type='button' onClick={handleClick}>
        exemple
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        exemple plus complexe
      </button>
    </article>
  );
};
export default Book;
