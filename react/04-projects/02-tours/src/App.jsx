import Loading from './Loading';
import Tours from './Tours';
import { useGlobalContext } from './context';

const App = () => {
  const { isLoading, tours, fetchTours } = useGlobalContext();

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!tours.length) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours />
    </main>
  );
};

export default App;
