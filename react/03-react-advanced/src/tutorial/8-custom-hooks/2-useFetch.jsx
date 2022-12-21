import { useState, useEffect } from 'react';

//! un custom hook commence toujours par useQuelqueChose - sinon erreur car on ne peut pas utiliser des hooks de React dans une fonction régulière
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async (url) => {
    setIsLoading(true);

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setIsLoading(false);
      setData(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  // il faut retourner quelque chose de notre custom hook
  return { isLoading, data };
};

export default useFetch;
