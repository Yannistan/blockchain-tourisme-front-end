import React from "react";

const LoginForm = () => {
  return (
    <section className="loginForm">
      <div className="header">
        <h2>Login/Register</h2>
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
    </section>
  );
};

export default LoginForm;
