import React from "react";

const Reservation = () => {
  return (
    <>
      <section className="reservation">
        <div className=" container row">
          <div className="col-sm-12 col-md-8 col-lg-5">
            <div className="head">
              <h2 className="secondaryTitle">Prepare your dream travel</h2>
            </div>
            <form className="form">
              {/*onSubmit={HandleReservationSubmit}*/}
              <legend>Please select options</legend>
              <div className="transport">
                <input
                  type="checkbox"
                  id="transport"
                  name="transport"
                  value="transport"
                />
                <label htmlFor="transport">Transport</label>
              </div>
              <div className="travel">
                <input
                  type="checkbox"
                  id="travel"
                  name="travel"
                  value="travel"
                />
                <label htmlFor="travel">Travel</label>
              </div>
              <div className="catering">
                <input
                  type="checkbox"
                  id="catering"
                  name="catering"
                  value="catering"
                />
                <label htmlFor="catering">Catering</label>
              </div>
              <div className="activities">
                <input
                  type="checkbox"
                  id="activities"
                  name="activities"
                  value="activities"
                />
                <label htmlFor="activities">Activities</label>
              </div>
              <div className="tours">
                <input type="checkbox" id="tours" name="tours" value="tours" />
                <label htmlFor="tours">Tours</label>
              </div>
              <div className="buttons">
                <button type="button">Check Price</button>
                <button type="submit">PAY</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
