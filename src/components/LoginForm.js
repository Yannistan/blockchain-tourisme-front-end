import React, { useContext, useState } from "react";
//import { DestinationContext } from "../context/DestinationContext";
import { TourismeContext } from "../App";

const LoginForm = () => {
  const Tourisme = useContext(TourismeContext);
  const [register, setRegister] = useState(false);
  const [getRegister, setGetRegister] = useState(false);
  const [password, setPassword] = useState("");

  const [address, setAddress] = useState("0x0");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async () => {
    const res = await Tourisme.register(email, password);
    // setGetRegister(res.toString());
    // console.log(setGetRegister);
  };

  const handleIsRegisteredClick = async () => {
    const res = await Tourisme.IsRegistered(address);
    setRegister(res.toString());
  };

  return (
    <section className="loginForm">
      <div className=" container row">
        <div className="col-sm-12 col-md-8 col-lg-5">
          <div className="head">
            <div>
              <h3 className="register">Register</h3>
            </div>
          </div>
          <form className="form">
            <legend>Register</legend>
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
