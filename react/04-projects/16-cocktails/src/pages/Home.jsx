import { useEffect, useState, useCallback } from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const Home = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    try {
      const resp = await fetch(`${url}${search}`);
      const { drinks } = await resp.json();

      if (drinks) {
        setCocktails(drinks);
      } else {
        setCocktails([]);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchDrinks();
  }, [fetchDrinks]);

  return (
    <main>
      <SearchForm search={search} setSearch={setSearch} />
      <CocktailList cocktails={cocktails} isLoading={isLoading} />
    </main>
  );
};

export default Home;
