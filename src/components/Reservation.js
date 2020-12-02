import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { DestinationContext } from "../context/DestinationContext";
import { TourismeContext } from "../App";

const Reservation = () => {
  const { destination } = useContext(DestinationContext);
  const Tourisme = useContext(TourismeContext);
  const [inputTransport, setInputTransport] = useState();
  const [inputAccommodation, setInputAccommodation] = useState("");
  const [inputCatering, setInputCatering] = useState("");
  const [inputActivities, setInputActivities] = useState("");
  const [inputTours, setInputTours] = useState("");
  const [getPrice, setGetPrice] = useState(0);
  const [ReserveID, setReserveID] = useState(0);
  const [AddressPayment, setAddressPayment] = useState("0x0");

  const handleOnClickSaveOffer = async () => {
    const res = await Tourisme.choose_offer(
      destination,
      inputAccommodation,
      inputTransport,
      inputCatering,
      inputActivities,
      inputTours
    );
  };

  /*   const handleOnClickGetID = async () => {
    const res = await Tourisme.getofferID();
    setReserveID(res.toString());
  } */

  const handleOnClickGetPrice = async () => {
    try {
      const res = await Tourisme.getPrice(ReserveID);
      setGetPrice(res.toString());
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleOnClickPay = async () => {
    await Tourisme.reserveByClient(ReserveID, AddressPayment);
  };

  const handleOnClickGetID = async () => {
    const res = await Tourisme.choose_offer(
      destination,
      inputAccommodation,
      inputTransport,
      inputCatering,
      inputActivities,
      inputTours
    );
    setReserveID(res.toString());
  };

  return (
    <>
      <section className="reservation">
        <div className=" container row">
          <div className="col-sm-12 col-md-8 col-lg-5">
            <div className="head">
              <h2>Reservation</h2>
            </div>
            <form className="form" onSubmit={handleOnClickPay}>
              {destination !== undefined ? (
                <p>
                  Your trip to <span>{destination}</span>
                  <sup>
                    <Link to="/travels" className="edit">
                      (edit)
                    </Link>
                  </sup>
                </p>
              ) : (
                <p>
                  First, please select a <Link to="/travels">destination</Link>
                </p>
              )}
              {destination !== undefined && (
                <legend>Please select options</legend>
              )}
              <div className="transport">
                <input
                  disabled={destination === undefined}
                  type="checkbox"
                  id="transport"
                  name="transport"
                  value={inputTransport}
                  onChange={(e) => {
                    setInputTransport(e.currentTarget.checked);
                  }}
                />
                <label htmlFor="transport">Transport</label>
              </div>
              <div className="travel">
                <input
                  disabled={destination === undefined}
                  type="checkbox"
                  id="travel"
                  name="travel"
                  value={inputAccommodation}
                  onChange={(e) => {
                    setInputAccommodation(e.currentTarget.checked);
                  }}
                />
                <label htmlFor="travel">Travel</label>
              </div>
              <div className="catering">
                <input
                  disabled={destination === undefined}
                  type="checkbox"
                  id="catering"
                  name="catering"
                  value={inputCatering}
                  onChange={(e) => {
                    setInputCatering(e.currentTarget.checked);
                  }}
                />
                <label htmlFor="catering">Catering</label>
              </div>
              <div className="activities">
                <input
                  disabled={destination === undefined}
                  type="checkbox"
                  id="activities"
                  name="activities"
                  value={inputActivities}
                  onChange={(e) => {
                    setInputActivities(e.currentTarget.checked);
                  }}
                />
                <label htmlFor="activities">Activities</label>
              </div>
              <div className="tours">
                <input
                  disabled={destination === undefined}
                  type="checkbox"
                  id="tours"
                  name="tours"
                  value={inputTours}
                  onChange={(e) => {
                    setInputTours(e.currentTarget.checked);
                  }}
                />
                <label htmlFor="tours">Tours</label>
              </div>
              <div className="id">
                Reservation ID : <span>{ReserveID}</span>
              </div>
              <div className="total">
                Total amount : <span>{getPrice} </span>TRM
              </div>
              <div className="buttons">
                <button
                  disabled={destination === undefined}
                  type="button"
                  title="Get reservation ID"
                  onClick={handleOnClickGetID}
                >
                  Get ID
                </button>
                <button
                  disabled={destination === undefined}
                  type="button"
                  title="Send reservation to contract"
                  onClick={handleOnClickSaveOffer}
                >
                  Reserve
                </button>
                <button
                  disabled={destination === undefined}
                  type="button"
                  title="Get reservation amount"
                  onClick={handleOnClickGetPrice}
                >
                  Get price
                </button>
                <button
                  disabled={destination === undefined}
                  type="submit"
                  title="Pay reservation"
                >
                  PAY
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
