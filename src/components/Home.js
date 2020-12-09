import React, { useState, useContext, useEffect } from "react";
//import { ethers } from 'ethers'

import Welcome from "./Welcome";
import Register from "./Register";

import Web3Info from "./Web3Info";

import { Web3Context } from "../hooks/useWeb3";
import { TourismeContext } from "../App";

import GreenDot from "../images/green_dot.gif";
import RedDot from "../images/red_dot.png";

const Home = () => {
  const [web3State, login] = useContext(Web3Context);
  const Tourisme = useContext(TourismeContext);
  const [register, setRegister] = useState(false);

  console.info("Address : ", web3State.account);

  useEffect(() => {
    const handleIsRegistered = async () => {
      const res = await Tourisme.isRegistered(web3State.account);
      setRegister(res);
      console.log("Is registered ?", register);
    };
    //handleIsRegistered();
  }, [Tourisme, web3State.account, register]);

  return (
    <>
      {web3State.is_logged ? (
        <>
          <span className="web3on">
            <img className="greenDot" alt="web3 connected" src={GreenDot}></img>
            Web 3 connected
          </span>
          <Web3Info />
        </>
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
      {/*     
      {!addressProvided && (
        <div className="formAddress ">
          <h2>Hello.</h2>
          <div className="row">
            <form>
              <div className="col-12">
                <label htmlFor="address">Please enter your address :</label>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  placeholder="0x0"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.currentTarget.value);
                  }}
                  required
                ></input>
              </div>
              <button type="button" onClick={handleIsRegistered}>
                Go
              </button>
            </form>
          </div>
        </div>
      )} 
      */}
      {!register ? <Welcome /> : <Register />}
    </>
  );
};

export default Home;
