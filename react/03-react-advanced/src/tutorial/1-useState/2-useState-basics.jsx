import { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('un titre au pif');

  const handleClick = () => {
    if (title === 'un titre au pif') {
      setTitle('bonjour');
    } else {
      setTitle('un titre au pif');
    }
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

export default UseStateBasics;
