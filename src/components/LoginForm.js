import React from "react";

const LoginForm = () => {
  return (
    <section className="loginForm">
      <div className=" container row">
        <div className="col-sm-12 col-md-8 col-lg-5">
          <div className="header">
            <h2 className="h4">Login/Register</h2>
          </div>
          <form className="form">
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
