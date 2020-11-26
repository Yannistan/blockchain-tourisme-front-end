import React, { useContext } from "react";

import LoginForm from "./LoginForm";
import IntroText from "./IntroText";

import Web3Info from "./Web3Info";
import { Web3Context } from "../hooks/useWeb3";

const Home = () => {
  const [web3State, login] = useContext(Web3Context);
  return (
    <>
      {!web3State.is_logged && (
        <p className="connectWeb3P">
          To use this app you need to
          <br />
          <button className="connectWeb3Btn" onClick={login}>
            Connect Web 3
          </button>
        </p>
      )}
      <LoginForm />
      <Web3Info />
      <div className="temp"></div>
      <IntroText />
    </>
  );
};

export default Home;
