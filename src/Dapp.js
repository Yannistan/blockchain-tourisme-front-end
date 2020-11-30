import React, { useContext, useState, useEffect } from "react";
import { Web3Context } from "./hooks/useWeb3";
import { ethers } from 'ethers';
import { Text, Button, HStack, NumberInput, Input } from "@chakra-ui/core";

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
  const tourisme = useContext(TourismeContext);
/* const [inputTransport, setInputTransport] = useState(false);
  const [inputAccommodation, setInputAccommodation] = useState("false");
  const [inputCatering, setInputCatering] = useState("false");
  const [inputActivities, setInputActivities] = useState("false");
  const [inputTours, setInputTours] = useState("false");
  const [getPrice, setGetPrice] = useState(0);
  const [ReserveID, setReserveID] = useState(0);
  const [AddressPayment, setAddressPayment] = useState('0x0'); 

  const handleOnClickCheckPrice = async () => {
    await Tourisme.choose_offer(
      inputTransport,
      inputAccommodation,
      inputCatering,
      inputActivities,
      inputTours
    );
  };

  const handleOnClickGetPrice = async () => {
    try {
      const res = await Tourisme.choose_offer(inputTransport, inputAccommodation, inputCatering, inputActivities, inputTours);
      setGetPrice(res.toString());
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleOnClickPay = async () => {
    await Tourisme.reserveByClient(ReserveID, AddressPayment);
  };

   /*useEffect(() => {
      if (web3State.signer !== null) {
        setTourisme(new ethers.Contract(
          Tourisme_address,
          Tourisme_abi,
          web3State.signer
        )
      )
    }    
  }, [web3State.signer]); */

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
         {/* <section className="reservation">
        <div className=" container row">
          <div className="col-sm-12 col-md-8 col-lg-5">
            <div className="head">
              <h2 className="secondaryTitle">Prepare your dream travel</h2>
            </div>
            <form className="form"
              onSubmit={handleOnClickPay}>
              <legend>Please select options</legend>
              <div className="transport">
                <input
                  type="checkbox"
                  id="transport"
                  name="transport"
                  value={inputTransport}
                  onChange={(e) => {
                    setInputTransport(e.currentTarget.checked);
                  }}
                />
                <label htmlFor="transport">Transport</label>
              </div>
              <div className="travel">
                <input
                  type="checkbox"
                  id="travel"
                  name="travel"
                  value={inputAccommodation}
                  onChange={(e) => {
                    setInputAccommodation(e.currentTarget.checked);
                  }}
                />
                <label htmlFor="travel">Travel</label>
              </div>
              <div className="catering">
                <input
                  type="checkbox"
                  id="catering"
                  name="catering"
                  value={inputCatering}
                  onChange={(e) => {
                    setInputCatering(e.currentTarget.checked);
                  }}
                />
                <label htmlFor="catering">Catering</label>
              </div>
              <div className="activities">
                <input
                  type="checkbox"
                  id="activities"
                  name="activities"
                  value={inputActivities}
                  onChange={(e) => {
                    setInputActivities(e.currentTarget.checked);
                  }}
                />
                <label htmlFor="activities">Activities</label>
              </div>
              <div className="tours">
                <input
                  type="checkbox"
                  id="tours"
                  name="tours"
                  value={inputTours}
                  onChange={(e) => {
                    setInputTours(e.currentTarget.checked);
                  }}
                />
                <label htmlFor="tours">Tours</label>
              </div>
              <div className="buttons">
                <button type="button" onClick={handleOnClickCheckPrice}>
                  Reserve
                </button>
                <HStack>
                <Button onClick={handleOnClickGetPrice}>Get price</Button>
                <Text>{getPrice}</Text>
                </HStack>
                <button type="submit">PAY</button>
               
              </div>
            </form>
            <HStack>
            
           
            
            <Button onClick={handleOnClickPay}>PAY</Button>
            </HStack>
          </div>
        </div>
                </section> */}
         
       
      </Router>
      
                
    </>
     
  );
}

export default Dapp;

