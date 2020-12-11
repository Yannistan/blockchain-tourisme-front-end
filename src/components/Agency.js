import React, { useContext, useState } from "react";

import { ethers } from "ethers";

import { TourismeContext } from "../App";
import { TourTokenContext } from "../App";

import { Web3Context } from "../hooks/useWeb3";

const Agency = () => {
  const Tourisme = useContext(TourismeContext);
  const TourToken = useContext(TourTokenContext);
  const [amount, setAmount] = useState("0");
  const [addrAgence, setAddrAgence] = useState("0x0");
  const [mintTokens, setMintTokens] = useState(false);

  const nbTokens = ethers.utils.parseEther("500.0");

  const handleMintTokens = async () => {
    await TourToken.mint(addrAgence, nbTokens);
  };

  return (
    <>
      <div className="agency">
        <div className="row">
          <div className="col-lg-6">
            <h2>Agency</h2>
            <p>Manage Tokens</p>
          </div>
          <div className="col-lg-6 links">
            <button onClick={() => setMintTokens(!mintTokens)}>
              Mint Tokens
            </button>
          </div>
          <div className="mintTokens">
            {mintTokens && (
              <>
                <hr />
                <form>
                  <label>Agency Address :</label>
                  <input
                    value={addrAgence}
                    onChange={(e) => {
                      setAddrAgence(e.currentTarget.value);
                    }}
                  />
                  {/*  <label>Amount in token :</label>
                  <input
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.currentTarget.value);
                    }}
                  /> */}
                  <button type="button" onClick={handleMintTokens}>
                    Mint Tokens
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
