import React, { createContext, useState } from "react";

export const TourismeContext = createContext();

const TourismeContextProvider = ({ children }) => {
  const [tourisme, setTourisme] = useState(null);
  return (
    <TourismeContext.Provider value={{ tourisme, setTourisme }}>
      {children}
    </TourismeContext.Provider>
  );
};

export default TourismeContextProvider;