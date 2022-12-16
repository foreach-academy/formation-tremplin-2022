import { useState, useEffect } from 'react';
import Follower from './Follower';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const App = () => {
  return (
    <main>
      <div className='section-title'>
        <h1>pagination</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          <Follower />
          <Follower />
        </div>
        <div className='btn-container'>
          <button className='prev-btn'>préc</button>
          <button className='page-btn active-btn'>1</button>
          <button className='page-btn'>2</button>
          <button className='next-btn'>suiv</button>
        </div>
      </section>
    </main>
  );
};

export default App;
