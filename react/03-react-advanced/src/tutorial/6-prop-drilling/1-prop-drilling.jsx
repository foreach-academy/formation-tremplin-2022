import { useState } from 'react';
import { data } from '../../data';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id != id));
  };

  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  // les autres composants n'ont pas besoin de removePerson mais on est obligé de passser par eux pour récupérer la fonction - c'est ce qu'on appelle le prop drilling
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>supprimer</button>
    </div>
  );
};

export default PropDrilling;
