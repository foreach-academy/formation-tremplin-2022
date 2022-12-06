import { useState } from 'react';
import List from './List';
import { data } from './data';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>il y a {people.length} anniversaires</h3>
        <List people={people} />
        <button type='button' onClick={() => setPeople([])}>
          vider la liste
        </button>
      </section>
    </main>
  );
};

export default App;
