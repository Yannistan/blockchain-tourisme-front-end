import React from "react";
import { Tourisme_address, Tourisme_abi } from "./contracts/Tourisme";
import { useContract } from "./hooks/useContract";
import Dapp from "./Dapp";

export const TourismeContext = React.createContext(null);

// export const TourTokenContext = React.createContext(null)

function App() {
  const tourisme = useContract(Tourisme_address, Tourisme_abi);
  // const TourToken = useContract(TourToken_address, TourToken_abi)
  return (
    <TourismeContext.Provider value={tourisme}>
      <Dapp />
    </TourismeContext.Provider>
  );
}

export default App;
