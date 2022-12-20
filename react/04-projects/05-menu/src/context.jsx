import { useState, useContext, createContext } from 'react';
import items from './data';

const AppContext = createContext();

const allCateogries = ['all', ...new Set(items.map((item) => item.category))];

const AppProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCateogries);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <AppContext.Provider value={{ menuItems, categories, filterItems }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
