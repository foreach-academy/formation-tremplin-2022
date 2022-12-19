import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
  const { setIsModalOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={() => setIsSidebarOpen(true)}>
        <FaBars />
      </button>
      <button className='btn' onClick={() => setIsModalOpen(true)}>
        montrer la modale
      </button>
    </main>
  );
};

export default Home;
