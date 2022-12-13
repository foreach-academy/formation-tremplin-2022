import { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import { useEffect } from 'react';

const App = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prevState) => {
      prevState = prevState - 1;

      if (prevState < 0) {
        return people.length - 1;
      }

      return prevState;
    });
  };

  const nextSlide = () => {
    //* 1ère façon
    setIndex((prevState) => {
      prevState = prevState + 1;

      if (prevState >= people.length - 1) {
        return 0;
      }

      return prevState;
    });

    //* 2ème façon
    // if (index >= people.length - 1) {
    //   setIndex(0);
    //   return;
    // }

    // setIndex(index + 1);

    //* 3ème façon
    // setIndex(index >= people.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevState) => {
        prevState = prevState + 1;

        if (prevState >= people.length - 1) {
          return 0;
        }

        return prevState;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [people.length]);

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
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
