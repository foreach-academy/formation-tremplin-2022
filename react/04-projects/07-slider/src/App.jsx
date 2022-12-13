import { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import { useEffect } from 'react';

const App = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > people.length - 1) {
      setIndex(0);
      return;
    }

    if (index < 0) {
      setIndex(people.length - 1);
    }
  }, [index, people.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, i) => {
          const { id, title, image, quote, name } = person;
          let position = 'nextSlide';

          if (i === index) {
            position = 'activeSlide';
          }

          if (i === index - 1 || (index === 0 && i === people.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
