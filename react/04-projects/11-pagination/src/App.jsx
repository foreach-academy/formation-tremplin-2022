import { useState, useEffect } from 'react';
import Follower from './Follower';
import paginate from './utils';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [followers, setFollowers] = useState([]);

  const getFollowers = async (url) => {
    setIsLoading(true);

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setData(paginate(data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage - 1;

      if (oldPage <= 0) {
        newPage = followers.length - 1;
      }

      return newPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1;

      if (oldPage >= followers.length - 1) {
        newPage = 0;
      }

      return newPage;
    });
  };

  useEffect(() => {
    getFollowers(url);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    setFollowers(data[page]);
  }, [isLoading, data, page]);

  return (
    <main>
      <div className='section-title'>
        <h1>{isLoading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {!isLoading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              préc
            </button>
            {followers.map((_, i) => (
              <button
                key={i}
                className={`page-btn${page === i ? ' active-btn' : ''}`}
                onClick={() => setPage(i)}>
                {i + 1}
              </button>
            ))}
            <button className='next-btn' onClick={nextPage}>
              suiv
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
