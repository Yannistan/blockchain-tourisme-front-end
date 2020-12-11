import React, { useContext, useState } from "react";
import { Web3Context } from "../hooks/useWeb3";
import { ethers } from "ethers";
import { TourismeContext } from "../App";
import { TourTokenContext } from "../App";
import { Link } from "react-router-dom";

const Welcome = () => {
  const Tourisme = useContext(TourismeContext);
  const TourToken = useContext(TourTokenContext);
  const [showTokens, setShowTokens] = useState(false);
  const [TokenNumber, setTokenNumber] = useState('0');
  const nbTokens = ethers.utils.parseEther(TokenNumber);
 // const [tokens, setTokens] = useState('0.0');
 const handleBuyTokens = async () => {
  await Tourisme.buyTokens(ethers.utils.parseEther('100.0'));
}
 
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

            <button onClick={() => setShowTokens(!showTokens)}>Buy tokens</button>
          </div>
          <div className="Tokens">
            { showTokens && (
              <>
                <hr />
                <form>
                <label>Number of Tokens</label>
                 <input
                    value={TokenNumber}
                    onChange={(e) => {
                      setTokenNumber(e.currentTarget.value);
                    }}
                  /> 
                  <button type="button" onClick={handleBuyTokens}>Buy Tokens</button>
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
