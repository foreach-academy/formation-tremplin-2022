import { useState } from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <main>
      <SearchForm search={search} setSearch={setSearch} />
      <CocktailList />
    </main>
  );
};

export default Home;
