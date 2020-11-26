import React, { useContext, useState } from "react";
import { Web3Context } from "./hooks/useWeb3";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Travels from "./components/Travels";
import Reservation from "./components/Reservation";

import IsLoggedInContextProvider from "./context/IsLoggedInContext";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/styles.css";

//import { TourismeContext } from "./App";

function Dapp() {
  const [web3State, login] = useContext(Web3Context);
  //const Tourisme = useContext(TourismeContext);

  const [getValue, setGetValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  /* useEffect(() => {
    (async () => {
      if (Tourisme) {
        const cb = (from, value) => {
          toast({
            position: "bottom",
            title: `SET`,
            description: `set value: ${value} by ${from}`,
            status: "success",
            duration: 10000,
            isClosable: true,
          });
        };
        simpleStorage.on("StorageSet", cb);
        return () => simpleStorage.off("StorageSet", cb);
      }
    })();
  }, [simpleStorage, toast]); */

  return (
    <>
      {web3State.chain_id === 4 && (
        <>
          <Router>
            <IsLoggedInContextProvider>
              <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/reservation" exact component={Reservation} />
                <Route path="/travels" exact component={Travels} />
              </Switch>
              <Footer />
            </IsLoggedInContextProvider>
          </Router>
        </>
      )}
    </>
  );
}

export default Dapp;
