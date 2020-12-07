import React, { useState, useContext, useEffect } from "react";
//import { ethers } from 'ethers'
import { Text, Button, HStack, Input } from "@chakra-ui/core";
import Register from "./Register";
import Welcome from "./Welcome";

import Web3Info from "./Web3Info";

import { Web3Context } from "../hooks/useWeb3";
import { TourismeContext } from "../App";

import GreenDot from "../images/green_dot.gif";
import RedDot from "../images/red_dot.png";

const Home = (name, email) => {
  const [web3State, login] = useContext(Web3Context);
  const Tourisme = useContext(TourismeContext);
  const [register, setRegister] = useState(false);
  const [address, setAddress] = useState("0x0");

  const handleIsRegistered = async () => {
    const res = await Tourisme.isRegistered(address);
    setRegister(res.toString());
  };

  // console.info("Registered ? ", register);

  return (
    <>
      <Text>Please provide your address :</Text>
      <Input
        value={address}
        onChange={(e) => {
          setAddress(e.currentTarget.value);
        }}
      />
      <button onClick={handleIsRegistered}>CHECK if registered</button>
      <p>{register}</p>

      {web3State.is_logged ? (
        <span className="web3on">
          <img className="greenDot" alt="web3 connected" src={GreenDot}></img>
          Web 3 connected
        </span>
      ) : (
        <>
          <p className="connectWeb3P">
            To use this app you need to{" "}
            <button className="connectWeb3Btn" onClick={login}>
              Connect Web 3
            </button>
          </p>
          <br />
          <span className="web3off">
            <img className="redDot" alt="web3 connected" src={RedDot}></img>
            Web 3 disconnected
          </span>
        </>
      )}
      {register ? <Welcome /> : <Register />}
      <Web3Info />
    </>
  );
};

export default Home;
