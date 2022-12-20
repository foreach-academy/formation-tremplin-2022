import { useGlobalContext } from './context';

// composants
import Navbar from './Navbar';
import CartContainer from './CartContainer';

function App() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
