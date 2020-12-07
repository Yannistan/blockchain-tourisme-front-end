import React, { useContext, useState } from "react";
import { TourismeContext } from "../App";

const Register = () => {
  const Tourisme = useContext(TourismeContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async () => {
    await Tourisme.register(name, email);
  };

  return (
    <section className="register">
      <div className=" container row">
        <div className="col-sm-12 col-md-8 col-lg-5">
          <div className="head">
            <div>
              <h3 className="registerTitle">Register</h3>
            </div>
          </div>
          <form className="form">
            <legend>Register</legend>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Full name"
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />
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

            <button type="button" onClick={handleRegister}>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
