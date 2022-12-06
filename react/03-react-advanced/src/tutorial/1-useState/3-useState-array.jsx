import React from 'react';
import { data } from '../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>supprimer</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        vider la liste
      </button>
    </>
  );
};

export default UseStateArray;
