import React, { createContext, useContext, useState } from 'react';

const defaultState = false;

export const MenuContext = createContext(defaultState);
export const MenuProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <MenuContext.Provider value={{ show, setShow }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuValue = () => useContext(MenuContext);
