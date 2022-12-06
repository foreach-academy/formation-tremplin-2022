import { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section>
        <h2>compteur basique</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          décrémenter
        </button>
        <button className='btn' onClick={() => setValue(0)}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          incrémenter
        </button>
      </section>

      <section style={{ margin: '5rem 0 ' }}>
        <h2>compteur basique</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          incrémenter
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
