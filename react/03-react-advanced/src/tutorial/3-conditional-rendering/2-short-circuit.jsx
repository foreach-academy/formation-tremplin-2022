import { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('peter');
  const [isError, setIsError] = useState(false);

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello people';
  // console.log(secondValue);

  return (
    <>
      <h2>{text || 'hello world'}</h2>
      <h2>valeur : {text && 'hello world'}</h2>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle erreur
      </button>
      {isError && <h1>erreur...</h1>}
      {isError ? (
        <p>il y a une erreur...</p>
      ) : (
        <div>
          <h2>il n'y a pas d'erreur</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
