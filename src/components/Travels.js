import React from "react";

import NewYork from "../images/small/new_york.jpg";
import Maldives from "../images/small/maldives.jpg";
import Vancouver from "../images/small/vancouver.jpg";
import Barcelona from "../images/small/barcelona.jpg";

const Travels = () => {
  return (
    <section className="travel">
      <h2 className="title">Travels</h2>
      <h3 className="secondaryTitle">Select your dream travel</h3>

      <div className="mx-3 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card">
            <img src={NewYork} className="card-img-top p-2" alt="..." />
            <div className="card-body">
              <h5 className="card-title">New York</h5>
              <p className="card-text">Blablabla</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src={Maldives}
              className="card-img-top p-2 img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Maldives</h5>
              <p className="card-text">Blablabla</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={Vancouver}
              className="card-img-top p-2 img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Vancouver</h5>
              <p className="card-text">Blablabla</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={Barcelona}
              className="card-img-top p-2 img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Barcelona</h5>
              <p className="card-text">Blablabla</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travels;
