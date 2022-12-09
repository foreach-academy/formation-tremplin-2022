import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const Question = ({ id, title, info, showInfo, handleClick }) => {
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => handleClick(id)}>
          {showInfo ? <FiMinus /> : <FiPlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
