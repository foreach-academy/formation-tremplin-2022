import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const App = () => {
  const [markdown, setMarkdown] = useState('# Mark Down Previewer');

  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}></textarea>
        <article className='result'>
          <ReactMarkdown children={markdown} />
        </article>
      </section>
    </main>
  );
};

export default App;
