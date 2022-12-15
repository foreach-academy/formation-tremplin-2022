import { useState } from 'react';
import data from './data';

const App = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = Number(count);

    if (amount < 0) {
      amount = 1;
    }

    if (amount > data.length) {
      amount = data.length - 1;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraph:</label>
        <input
          type='number'
          id='amount'
          name='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
};

export default App;
