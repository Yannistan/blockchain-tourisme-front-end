import React, { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";

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
    const isConnected = async () => {
      const account = await Tourisme.isRegistered(web3State.account);
      setRegister(account);
      console.log("is Registered ?", register);
    };
    if (
      web3State.account !== ethers.constants.AddressZero &&
      Tourisme !== null
    ) {
      isConnected();
    }
  }, [Tourisme, web3State.account, register, web3State.balance]);

  return (
    <>
      {web3State.is_logged ? (
        <>
          <span className="web3on">
            <img className="greenDot" alt="web3 connected" src={GreenDot}></img>
            Web 3 connected
          </span>
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
      {register ? <Welcome /> : <Register />}
      <Web3Info />
    </>
  );
};

export default Home;
