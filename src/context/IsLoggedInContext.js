import React, { createContext, useState } from "react";

export const IsLoggedInContext = createContext();

const IsLoggedInContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </IsLoggedInContext.Provider>
  );
};

export default IsLoggedInContextProvider;
