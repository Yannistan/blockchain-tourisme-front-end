import React, { useReducer, useState, createContext } from "react";
import { dappReducer, initialDappState } from "../reducer/dappReducer";
import { ethers } from "ethers";

export const DappContext = createContext();

export const DappProvider = ({ children }) => {
  const [dappState, dappDispatch] = useReducer(dappReducer, initialDappState);
  

  return (
    <DappContext.Provider
      value={{ dappState, dappDispatch, citizen, setCitizen }}
    >
      {children}
    </DappContext.Provider>
  );
};