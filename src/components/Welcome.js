import React, { useContext, useState } from "react";

import { TourismeContext } from "../App";
import { TourTokenContext } from "../App";
import { Link } from "react-router-dom";

const Welcome = () => {
  const Tourisme = useContext(TourismeContext);
  const TourToken = useContext(TourTokenContext);
  const [amount, setAmount] = useState(0);
  const [addrClient, setAddrClient] = useState("0x0");

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
            <Link to="/balance">Your balance</Link>
          </div>
        </div>
      </div>
      <p>Client Address :</p>
      <input
        value={addrClient}
        onChange={(e) => {
          setAddrClient(e.currentTarget.value);
        }}
      />
      <p>Amount in token :</p>
      <input
        value={amount}
        onChange={(e) => {
          setAmount(e.currentTarget.value);
        }}
      />
      <button onClick={handleGetFreeTokens}>Get Tokens</button>
    </>
  );
};

export default Welcome;
