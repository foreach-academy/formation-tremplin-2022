import React, { useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = React.createContext();

const defaultState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const fetchProducts = async () => {
    dispatch({ type: 'LOADING' });
    const resp = await fetch(url);
    const products = await resp.json();
    dispatch({ type: 'DISPLAY_ITEMS', payload: products });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
