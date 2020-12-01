import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { DestinationContext } from "../context/DestinationContext";

import { destinations } from "../destinations/destinations.js";

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
        {destinations.map((el) => {
          return (
            <div className="col" key={el.name}>
              <div
                className={`card ${
                  destination === el.name ? "cardSelected" : ""
                }
      `}
              >
                <img
                  src={el.image}
                  className="card-img-top p-2"
                  alt={el.name}
                />
                <div className="card-body">
                  <div className="flexContainer">
                    <h5 className="card-title">{el.name}</h5>
                    <button
                      onClick={() => setDestination(`${el.name}`)}
                      className={destination === el.name ? "selected" : ""}
                    >
                      {destination === el.name ? "Selected" : "Select"}
                    </button>
                  </div>
                  <p className="card-text">
                    {el.description}{" "}
                    <a href={el.link} rel="noopener noreferrer" target="_blank">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Travels;
