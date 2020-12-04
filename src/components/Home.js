import React, { useContext } from "react";
//import { ethers } from 'ethers'
import LoginForm from "./LoginForm";
import Welcome from "./Welcome";

import Web3Info from "./Web3Info";
import { Web3Context } from "../hooks/useWeb3";

import GreenDot from "../images/green_dot.gif";
import RedDot from "../images/red_dot.png";

const Home = () => {
  const [web3State, login] = useContext(Web3Context);
  return (
    <>
      {web3State.is_logged ? (
        <span className="web3on">
          <img className="greenDot" alt="web3 connected" src={GreenDot}></img>
          Web 3 connected
        </span>
      ) : (
        <>
          <p className="connectWeb3P">
            To use this app you need to
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
      <LoginForm />
      <Welcome />
      <Web3Info />
    </>
  );
};

export default Home;
