import React from "react";

import { Link } from "react-router-dom";

import { useWindowWidth } from "@react-hook/window-size";

import PlaneIcon from "../images/airplane_wh.png";

const Header = () => {
  const onlyWidth = useWindowWidth();

  return (
    <>
      <header>
        <h1 className="h2 logo">
          <Link to="/">B×travel</Link>&nbsp;
          <span>
            <img className="logoIcon" src={PlaneIcon} alt="Btrip logo"></img>
          </span>
        </h1>
        {/*<img src={Logo} alt="..."></img>*/}
        <nav>
          {onlyWidth > 700 ? (
            <>
              <Link to="/getTokens">Agency</Link>
              <Link to="/travels">Travels</Link>
              <Link to="/reservation">Reservation</Link>
            </>
          ) : (
            <>
              <div className="menu">
                <Link to="/getTokens">Agency</Link>
                <Link to="/travels">Travels</Link>
                <Link to="/reservation">Reservation</Link>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
