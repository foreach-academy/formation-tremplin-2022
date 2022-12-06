const ErrorExample = () => {
  let title = 'un titre au pif';

  const handleClick = () => {
    title = 'bonjour';
    console.log(title);
  };

  return (
    <>
      <h2>{title}</h2>
      <button className='btn' onClick={handleClick}>
        changer le titre
      </button>
    </>
  );
};

export default ErrorExample;
