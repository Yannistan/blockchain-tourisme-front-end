import React, { useContext, useState } from "react";
//import { DestinationContext } from "../context/DestinationContext";
import { TourismeContext } from "../App";

const LoginForm = () => {
  const Tourisme = useContext(TourismeContext);
  const [register, setRegister] = useState(false);
  const [login, setLogIn] = useState(true);
  const [getLogin, setGetLogin] = useState(false);
  const [getRegister, setGetRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    setLogIn(true);
    setRegister(false);
  };

  const handleRegisterClick = () => {
    setLogIn(false);
    setRegister(true);
  };

  const handleRegister = async () => {
    const res = await Tourisme.register(email, password);

    // setGetRegister(res.toString());
    // console.log(setGetRegister);
  };

  const handleConfirmRegister = async () => {
    const res = await Tourisme.confirmRegister();
    setGetRegister(res.toString());
  };

  const handleGetLogin = async () => {
    const res = await Tourisme.login();
    setGetLogin(res.toString());
  };

  // console.log("login :", login, "register :", register);

  return (
    <section className="loginForm">
      <div className=" container row">
        <div className="col-sm-12 col-md-8 col-lg-5">
          <div className="head">
            <div>
              <button
                className={`login ${login && "selected"}`}
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
            <div>
              <button
                className={`register ${register && "selected"}`}
                onClick={handleRegisterClick}
              >
                Register
              </button>
            </div>
          </div>
          <form className="form">
            <legend>{login ? "Login" : "Register"}</legend>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <button type="button" onClick={handleRegister}>
              Connect
            </button>
            <button type="button" onClick={handleConfirmRegister}>
              Registered?
            </button>
            <div>
              <h3>IsRegistered ?{getRegister}</h3>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
