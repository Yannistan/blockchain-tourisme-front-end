import React from "react";

import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="introText">
        <div className="row">
          <div className="col-lg-6">
            <h2>Hello.</h2>
            <p>You are registered.</p>
          </div>
          <div className="col-lg-6 links">
            <Link to="/travels">Destinations</Link>
            <Link to="/travels">Your balance</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
