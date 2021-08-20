import React, { createContext, useContext, useState } from 'react';

export const MenuContext = createContext();
export const MenuProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <MenuContext.Provider value={{ show, setShow }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuValue = () => useContext(MenuContext);
