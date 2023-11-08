import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleContext = createContext();

export const Title = ({ children }) => {
  const location = useLocation();
  const [title, setTitle] = useState('PHero');

  useEffect(() => {
    if (location.pathname === '/all-products') {
      setTitle('PHero | All Products');
    } else if (location.pathname === '/another-route') {
      setTitle('PHero | Another Route');
    } else {
      setTitle('PHero'); // Default title for other routes
    }
  }, [location.pathname]);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => {
  return useContext(TitleContext);
};