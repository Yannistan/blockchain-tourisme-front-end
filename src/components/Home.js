import React, { useState, useContext, useEffect } from "react";
//import { ethers } from 'ethers'
import Register from "./Register";
import Welcome from "./Welcome";

import Web3Info from "./Web3Info";

import { Web3Context } from "../hooks/useWeb3";
import { TourismeContext } from "../App";

import GreenDot from "../images/green_dot.gif";
import RedDot from "../images/red_dot.png";

const Home = () => {
  const [web3State, login] = useContext(Web3Context);
  const Tourisme = useContext(TourismeContext);
  const [register, setRegister] = useState(false);
  const [address, setAddress] = useState("0x0");

  const isRegistered = async () => {
    const res = await Tourisme.IsRegistered(address);
    setRegister(res.toString());
  };

  console.info("Registered ? ", register);

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
      <div className="formAddress ">
        <h2>Hello.</h2>
        <div className="row">
          <form>
            <div className="col-12">
              <label ghtmlFor="address">Please enter your address :</label>
            </div>
            <div className="col-12">
              <input
                type="text"
                placeholder="0x0..."
                id="address"
                name="address"
                required
              ></input>
            </div>
            <button type="submit">Go</button>
          </form>
        </div>
      </div>
      {/*{!register ? <Welcome /> : <Register />}*/}
      <Web3Info />
    </>
  );
};

export default Home;
