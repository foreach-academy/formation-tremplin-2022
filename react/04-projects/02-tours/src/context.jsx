import { useState, useEffect, createContext, useContext } from 'react';

const url = 'https://course-api.com/react-tours-project';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        tours,
        removeTour,
        fetchTours,
        readMore,
        setReadMore
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
