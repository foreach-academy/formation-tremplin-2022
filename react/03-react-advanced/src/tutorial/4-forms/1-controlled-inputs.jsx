import { useState } from 'react';
// JS Vanilla
// const input = document.getElementById('myText');
// const inputValue = input.value

// React
// value, onChange

const controlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        email
      };

      setPeople([...people, person]);
      setFirstName('');
      setEmail('');
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Émail :</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>ajouter une personne</button>
      </form>
      {people.map((person) => {
        const { id, firstName, email } = person;

        return (
          <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default controlledInputs;
