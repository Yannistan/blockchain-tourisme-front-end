import React, { useContext, useState } from "react";
//import { DestinationContext } from "../context/DestinationContext";
import { TourismeContext } from "../App";

const LoginForm = () => {
  const Tourisme = useContext(TourismeContext);
  const [login, setLogIn] = useState(true);
  const [getLogin, setGetLogin] = useState(false);
  const [getRegister, setGetRegister] = useState(false);
  const [register, setRegister] = useState(false);
  
  const [address, setAddress] = useState('0x0');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleLoginClick = () => {
    setLogIn(true);
    setRegister(false);
  };

  const handleRegisterClick = () => {
    setLogIn(false);
    setRegister(true);
  };

  const handleIsRegisteredClick = async () => {
    const res = await Tourisme.IsRegistered(address);
    setRegister(res.toString());
  };

  const handleRegister = async () => {
    
      const res = await Tourisme.register(email, name);
  
  };

  const handleConfirmRegister = async () => {
    const res = await Tourisme.confirmRegister();
    setGetRegister(res.toString());
  }

  const handleGetLogin = async () => {
    const res = await Tourisme.login();
    setGetLogin(res.toString());
  }

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
          <form className="form" >
            
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
            <label htmlFor="name"></label>
            <input
              type="name"
              id="name"
              name="password"
              required
              placeholder="name"
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />
            <button type="button" onClick={handleRegister}>Connect</button>
            <button type="button" onClick={handleConfirmRegister}>Registered?</button> 
            <div>
                <p>IsRegistered ?{getRegister}</p>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
