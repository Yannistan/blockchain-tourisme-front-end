import React, { useContext } from "react";

import { IsLoggedInContext } from "../context/IsLoggedInContext";

const Header = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <>
      <header>
        <h1 className="h2">Name of App</h1>
        <nav>
          <a href="/">Travels</a>
          <a href="/">Account</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
