import React from "react";
import "./loginRegisterStyle/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="description">
        <img src="assets/logo.png" className="logo" />
        <h2 className="description-p">
          Mehdis, where visual stories come to life allowing you to connect and
          share memorabel moments with friends an followers.
        </h2>
      </div>

      <form className="login-form">
        <div className="inputs">
          <h2>Login</h2>
          <input
            className="input email"
            placeholder="Email address"
            type="text"
          />
          <input
            className="input password"
            placeholder="Password"
            type="password"
          />
          <button className="btn lgn">Login</button>
        </div>

        <Link to="/forgotten-pass" className="forgotten-pass">
          Forgotten Password?
        </Link>

        <hr />
        <Link to="/register">
          <button className="btn register">Create new account</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
