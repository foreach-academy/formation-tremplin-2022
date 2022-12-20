import { useState, useEffect } from 'react';
import paginate from './utils';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getFollowers = async () => {
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

  useEffect(() => {
    getFollowers(url);
  }, []);

  return { isLoading, data };
};
