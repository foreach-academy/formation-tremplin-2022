import { useState, useEffect } from 'react';

//* fonction de nettoyage (cleanup)

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);

    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });

  console.log('rendu');

  return (
    <>
      <h1>Fenêtre</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
