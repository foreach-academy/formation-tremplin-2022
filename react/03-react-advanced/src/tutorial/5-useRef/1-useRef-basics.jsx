import { useEffect, useRef } from 'react';

// préserve valeur comme useState
// Ne déclenche PAS de rendu
// cible des éléments dans le DOM

const useRefBasics = () => {
  const inputRef = useRef(null);
  const pRef = useRef(null);

  console.log(inputRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    console.log(pRef.current);
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  console.log(pRef);

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' ref={inputRef} />
        <button type='submit'>soumettre</button>
      </form>
      <p ref={pRef}>hello world</p>
    </>
  );
};

export default useRefBasics;
