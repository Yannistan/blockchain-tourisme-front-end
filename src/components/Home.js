import React from "react";

import LoginForm from "./LoginForm";
import IntroText from "./IntroText";

import Web3Info from "./Web3Info";

const Home = () => {
  return (
    <>
      <LoginForm />
      <Web3Info />
      <IntroText />
    </>
  );
};

export default Home;
