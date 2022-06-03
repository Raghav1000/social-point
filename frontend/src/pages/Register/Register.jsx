import React from "react";
import "./Register.scss";
import { useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left">
          <h1>Social Point</h1>
          <h4>Makes you feel connected to the world</h4>
        </div>
        <form className="login__box" onSubmit={handleChange}>
          <h4>Register Form</h4>
          {/* <div className="login__details"> */}
          <input
            type="text"
            name=""
            required
            id=""
            placeholder="Username"
            ref={username}
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            required
            ref={email}
          />
          <input
            type="password"
            required
            name=""
            id=""
            placeholder="Password"
            ref={password}
            minLength="6"
          />
          <input
            type="password"
            required
            name=""
            id=""
            placeholder="Password Again"
            ref={passwordAgain}
          />

          <button type="submit">Register</button>
          <p>Already registered ?</p>
          <Link to="/login">
            <button className="button">Login</button>
          </Link>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
