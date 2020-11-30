import React from "react";
import { Tourisme_address, Tourisme_abi } from "./contracts/Tourisme";
import { useContract } from "./hooks/useContract";
import Dapp from "./Dapp";

export const TourismeContext = React.createContext(null);

function App() {
  const Tourisme = useContract(Tourisme_address, Tourisme_abi);
 
  return (
    <TourismeContext.Provider value={Tourisme}>
      <Dapp />
    </TourismeContext.Provider>
  );
}

export default App;