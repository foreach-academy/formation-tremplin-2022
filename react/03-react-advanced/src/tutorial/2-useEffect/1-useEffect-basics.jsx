import { useState, useEffect } from 'react';

//* par défaut s'éxécute après chaque rendu
//* second argument

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => console.log('hello world'), []);

  useEffect(() => {
    console.log('appel de useEffect');

    if (value > 0) {
      document.title = `Nouveaux messages (${value})`;
    }
  }, [value]);

  console.log('rendu composant');

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        clique moi
      </button>
    </>
  );
};

export default UseEffectBasics;
