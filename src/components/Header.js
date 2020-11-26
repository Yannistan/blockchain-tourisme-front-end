import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IsLoggedInContext } from "../context/IsLoggedInContext";

import PlaneIcon from "../images/airplane_wh.png";

const Header = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <>
      <header>
        <h1 className="h2 logo">
          <Link to="/">Btravel</Link>
          <span>
            <img className="logoIcon" src={PlaneIcon} alt="Btrip logo"></img>
          </span>
        </h1>
        {/*<img src={Logo} alt="..."></img>*/}
        <nav>
          <Link to="/reservation">Reservation</Link>
          <Link to="/travels">Travels</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
