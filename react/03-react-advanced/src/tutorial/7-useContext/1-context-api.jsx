import { useState, useContext, createContext } from 'react';
import { data } from '../../data';

const PersonContext = createContext();
// on a accès à un composant lorqu'on utilise createContext() - Provider
// Provider agit comme un distributeur. Il doit envelopper notre composant racine (tout notre application)
// console.log(PersonContext)

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id != id));
  };

  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <section>
        <h3>context API / useContext</h3>
        <List />
      </section>
    </PersonContext.Provider>
  );
};

const List = () => {
  // on récupère l'objet dans la prop value du Provider
  const mainData = useContext(PersonContext);

  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>supprimer</button>
    </div>
  );
};

export default ContextAPI;
