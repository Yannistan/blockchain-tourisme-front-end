import React, { useState } from "react";

const LoginForm = () => {
  const [register, setRegister] = useState(false);
  const [login, setLogIn] = useState(true);

  const handleLoginClick = () => {
    setLogIn(true);
    setRegister(false);
  };

  const handleRegisterClick = () => {
    setRegister(true);
    setLogIn(false);
  };

  console.log("login :", login, "register :", register);

  return (
    <section className="loginForm">
      <div className=" container row">
        <div className="col-sm-12 col-md-8 col-lg-5">
          <div className="header">
            <div>
              <button className="login" onClick={handleLoginClick}>
                Login
              </button>
            </div>
            <div>
              <button className="register" onClick={handleRegisterClick}>
                Register
              </button>
            </div>
          </div>
          <form className="form">
            <legend>{login ? "Login" : "Register"}</legend>
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              email="email"
              required
              placeholder="Email"
            />
            <label htmlFor="email"></label>
            <input
              type="text"
              id="password"
              email="password"
              required
              placeholder="Password"
            />
            <button type="submit">Connect</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
