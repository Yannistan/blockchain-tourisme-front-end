import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { DestinationContext } from "../context/DestinationContext";

import NewYork from "../images/small/new_york.jpg";
import Maldives from "../images/small/maldives.jpg";
import Vancouver from "../images/small/vancouver.jpg";
import Barcelona from "../images/small/barcelona.jpg";

const Travels = () => {
  const { destination, setDestination } = useContext(DestinationContext);
  console.log("destination :", destination);

  return (
    <section className="travel">
      <h2 className="title">Travels</h2>
      <h3 className="secondaryTitle">Select your dream travel</h3>

      {destination !== undefined && (
        <div className="selection">
          <p>Your trip to {destination} :</p>
          <Link to="/reservation">Reserve</Link>
          <button onClick={() => setDestination(undefined)} className="clear">
            × clear destination
          </button>
        </div>
      )}

      <div className="mx-3 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        <div className="col">
          <div
            className={`card ${destination === "New York" ? "cardSelected" : ""}
            `}
          >
            <img src={NewYork} className="card-img-top p-2" alt="New York" />
            <div className="card-body">
              <div className="flexContainer">
                <h5 className="card-title">New York</h5>
                <button
                  onClick={() => setDestination("NewYork")}
                  className={destination === "NewYork" ? "selected" : ""}
                >
                  {destination === "NewYork" ? "Selected" : "Select"}
                </button>
              </div>
              <p className="card-text">
                New York City (NYC), often called simply New York, is the most
                populous city in the United States. With an estimated 2019
                population of 8,336,817 distributed ...{" "}
                <a
                  href="https://en.wikipedia.org/wiki/New_York_City"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className={`card ${destination === "Maldives" ? "cardSelected" : ""}
            `}
          >
            <img
              src={Maldives}
              className="card-img-top p-2 img-fluid"
              alt="Maldives"
            />
            <div className="card-body">
              <div className="flexContainer">
                <h5 className="card-title">Maldives</h5>
                <button
                  onClick={() => setDestination("Maldives")}
                  className={
                    destination === "Maldives" ? "selected" : undefined
                  }
                >
                  {destination === "Maldives" ? "Selected" : "Select"}
                </button>
              </div>
              <p className="card-text">
                Maldives, officially the Republic of Maldives, is a small
                archipelagic island country in South Asia, situated in the
                Arabian Sea of the Indian Ocean ...{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Maldives"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className={`card ${
              destination === "Vancouver" ? "cardSelected" : ""
            }
            `}
          >
            <img
              src={Vancouver}
              className="card-img-top p-2 img-fluid"
              alt="Vancouver"
            />
            <div className="card-body">
              <div className="flexContainer">
                <h5 className="card-title">Vancouver</h5>
                <button
                  onClick={() => setDestination("Vancouver")}
                  className={
                    destination === "Vancouver" ? "selected" : undefined
                  }
                >
                  {destination === "Vancouver" ? "Selected" : "Select"}
                </button>
              </div>
              <p className="card-text">
                Vancouver is a major city in western Canada, located in the
                Lower Mainland region of British Columbia. As the most populous
                city in the province ...{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Vancouver"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className={`card ${
              destination === "Barcelona" ? "cardSelected" : ""
            }
            `}
          >
            <img
              src={Barcelona}
              className="card-img-top p-2 img-fluid"
              alt="Barcelona"
            />
            <div className="card-body">
              <div className="flexContainer">
                <h5 className="card-title">Barcelona</h5>
                <button
                  onClick={() => setDestination("Barcelona")}
                  className={
                    destination === "Barcelona" ? "selected" : undefined
                  }
                >
                  {destination === "Barcelona" ? "Selected" : "Select"}
                </button>
              </div>
              <p className="card-text">
                Barcelona is a city on the coast of northeastern Spain. It is
                the capital and largest city of the autonomous community of
                Catalonia, as well as the second most populous ...{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Barcelona"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travels;
