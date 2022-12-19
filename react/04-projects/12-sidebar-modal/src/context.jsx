import { useState, createContext, useContext } from 'react';

// initialise le context
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{ isModalOpen, isSidebarOpen, setIsModalOpen, setIsSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hoook
export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
