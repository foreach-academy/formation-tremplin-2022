const Book = ({ img, title, author }) => {
  const handleClick = (e) => {
    console.log(e.target);
    alert('hello');
  };

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <button type='button' onClick={handleClick}>
        exemple
      </button>
    </article>
  );
};

export default Book;
