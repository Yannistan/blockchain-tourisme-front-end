import React, { useContext, useState } from "react";
import { Web3Context } from "../hooks/useWeb3";

const Web3Info = () => {
  const [web3State, login] = useContext(Web3Context);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="web3container">
        {web3State.is_logged && (
          <button
            className={`showInfoBtn ${showInfo && "hide"}`}
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? "Ok" : "Show connection info"}
          </button>
        )}

        {showInfo && (
          <div className="web3info">
            <div>
              <p>Connection info</p>
              <button onClick={() => setShowInfo(!showInfo)}>×</button>
            </div>
            <ul>
              <li>Web3: {web3State.is_web3 ? "injected" : "no-injected"}</li>
              <li>Network id: {web3State.chain_id}</li>
              <li>Network name: {web3State.network_name}</li>
              <li>
                MetaMask installed: {web3State.is_metamask ? "yes" : "no"}
              </li>
              <li>logged: {web3State.is_logged ? "yes" : "no"}</li>
              <li>{web3State.account}</li>
              <li>Balance: {web3State.balance}</li>
            </ul>
          </div>
        )}
        {web3State.chain_id === 4 && ""}
      </div>
    </>
  );
};

export default Web3Info;
