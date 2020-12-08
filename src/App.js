import React from "react";
import { Tourisme_address, Tourisme_abi } from "./contracts/Tourisme";
import { TourToken_address, TourToken_abi } from "./contracts/TourToken";
import { useContract } from "./hooks/useContract";
import Dapp from "./Dapp";

export const TourismeContext = React.createContext(null);
export const TourTokenContext = React.createContext(null);
//export const TourTokenContext = React.createContext(null); 
function App() {
  const tourisme = useContract(Tourisme_address, Tourisme_abi);
  const tourtoken = useContract(TourToken_address, TourToken_abi);
 // const tourToken = useContract(TourToken_address, TourToken_abi);
  //return (
   

// export const TourTokenContext = React.createContext(null)

  //const tourisme = useContract(Tourisme_address, Tourisme_abi);
  // const TourToken = useContract(TourToken_address, TourToken_abi)
  return (
    <TourTokenContext.Provider value={tourtoken}>
    <TourismeContext.Provider value={tourisme}>
      <Dapp />
    </TourismeContext.Provider>
    </TourTokenContext.Provider>
 
  );
}

export default App;
