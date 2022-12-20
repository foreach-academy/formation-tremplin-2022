import React from 'react';
import Tour from './Tour';
import { useGlobalContext } from './context';

const Tours = () => {
  const { tours } = useGlobalContext();

  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
