import React, { useContext } from "react";
import "./Login.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { loginCall } from "../../pages/apiCalls";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const [post, setPost] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left">
          <h1>Social Point</h1>
          <h4>Makes you feel connected to the world</h4>
        </div>
        <form className="login__box" onSubmit={handleChange}>
          <h4>Login Form</h4>
          {/* <div className="login__details"> */}
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            ref={email}
            required
          />
          <input
            type="password"
            name=""
            required
            minLength="6"
            id=""
            placeholder="Password"
            ref={password}
          />
          <button disabled={isFetching}>
            {isFetching ? "Loading" : "Login"}{" "}
          </button>
          <p>Don't have account ?</p>
          <Link to="/register">
            <button className="login">Register</button>
          </Link>
          {/* </div> */}
        </form>{" "}
      </div>
    </div>
  );
};

export default Login;
