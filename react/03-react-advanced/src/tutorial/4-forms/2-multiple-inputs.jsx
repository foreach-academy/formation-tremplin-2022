import { useState } from 'react';

const MultipleInputs = () => {
  const [people, setPeople] = useState([]);
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, age } = person;

    if (firstName && email && age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', age: '' });
    } else {
      console.log('valeurs vides');
    }
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Prénom :</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Émail :</label>
          <input
            type='email'
            id='email'
            name='email'
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='age'>Âge :</label>
          <input
            type='number'
            id='age'
            name='age'
            value={person.age}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>ajouter une personne</button>
      </form>
      {people.map((person) => {
        const { id, firstName, email, age } = person;

        return (
          <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{age} ans</p>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default MultipleInputs;
