import React, { useContext, useState, useEffect } from "react";
import { Web3Context } from "./hooks/useWeb3";
import { ethers } from "ethers";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Travels from "./components/Travels";
import Reservation from "./components/Reservation";

import IsLoggedInContextProvider from "./context/IsLoggedInContext";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/styles.css";
import { TourismeContext } from "./App";

function Dapp() {
  const [web3State, login] = useContext(Web3Context);
  const Tourisme = useContext(TourismeContext);
  return (
    <>
      <Router>
        <IsLoggedInContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reservation" exact component={Reservation} />
            <Route path="/travels" exact component={Travels} />
          </Switch>
        </IsLoggedInContextProvider>
        <Footer />
      </Router>
    </>
  );
}

export default Dapp;
