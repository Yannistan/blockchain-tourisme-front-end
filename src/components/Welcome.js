import React, { useContext, useState } from "react";
import { Web3Context } from "../hooks/useWeb3";
import { ethers } from "ethers";
import { TourismeContext } from "../App";
import { TourTokenContext } from "../App";
import { Link } from "react-router-dom";

const Welcome = () => {
  const Tourisme = useContext(TourismeContext);
  const TourToken = useContext(TourTokenContext);
 
  const [amount, setAmount] = useState(0);
  const [addrClient, setAddrClient] = useState("0x0");
  const [getTokens, setGetTokens] = useState(false);
  
  //const nbTokens = ethers.utils.parseEther(amount);
  const handleGetFreeTokens = async () => {
    await TourToken.mint(addrClient, amount);
  };

  return (
    <>
      <div className="introText">
        <div className="row">
          <div className="col-lg-6">
            <h2>Welcome</h2>
            <p>You are registered.</p>
          </div>
          <div className="col-lg-6 links">
            <Link to="/travels">Destinations</Link>
            <button onClick={() => setGetTokens(!getTokens)}>Get tokens</button>
          </div>
          <div className="getTokens">
            {getTokens && (
              <>
                <hr />
                <form>
                  <label>Client Address :</label>
                  <input
                    value={addrClient}
                    onChange={(e) => {
                      setAddrClient(e.currentTarget.value);
                    }}
                  />
                  <label>Amount in token :</label>
                  <input
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.currentTarget.value);
                    }}
                  />
                  <button onClick={handleGetFreeTokens}>Get Tokens</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
