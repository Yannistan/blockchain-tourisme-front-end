import React, { useContext, useState, useEffect } from "react";
import { Text, Button, VStack, HStack, Input, useToast } from "@chakra-ui/core";
import { ethers } from "ethers";
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
  const toast = useToast();

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
      <Text>Web3: {web3State.is_web3 ? "injected" : "no-injected"}</Text>
      <Text>Network id: {web3State.chain_id}</Text>
      <Text>Network name: {web3State.network_name}</Text>
      <Text>MetaMask installed: {web3State.is_metamask ? "yes" : "no"}</Text>
      <Text>logged: {web3State.is_logged ? "yes" : "no"}</Text>
      <Text>{web3State.account}</Text>
      <Text>Balance: {web3State.balance}</Text>
      {!web3State.is_logged && (
        <>
          <Button onClick={login}>login</Button>
        </>
      )}
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
