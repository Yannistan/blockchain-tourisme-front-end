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
            {/*onSubmit={HandleLoginSubmit}*/}
            <legend>{login ? "Login" : "Register"}</legend>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
            />
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
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
