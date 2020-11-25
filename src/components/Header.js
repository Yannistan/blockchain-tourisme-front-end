import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IsLoggedInContext } from "../context/IsLoggedInContext";

const Header = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <>
      <header>
        <h1 className="h2">
          <Link to="/">Name of App</Link>
        </h1>
        <nav>
          <Link to="/reservation">Reservation</Link>
          <Link to="/travels">Travels</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
