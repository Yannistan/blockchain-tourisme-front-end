import React, { createContext, useState } from "react";

export const DestinationContext = createContext();

const DestinationContextProvider = ({ children }) => {
  const [destination, setDestination] = useState(undefined);
  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      {children}
    </DestinationContext.Provider>
  );
};

export default DestinationContextProvider;
