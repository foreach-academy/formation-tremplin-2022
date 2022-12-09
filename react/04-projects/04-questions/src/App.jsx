import { useState } from 'react';
import Question from './Question';
import data from './data';

const App = () => {
  const [questionID, setQuestionID] = useState(0);

  const handleClick = (id) => {
    setQuestionID((prevState) => (prevState === id ? null : id));
  };

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {data.map((question) => {
            return (
              <Question
                key={question.id}
                {...question}
                handleClick={handleClick}
                showInfo={question.id === questionID}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
