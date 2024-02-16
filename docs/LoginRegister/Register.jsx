import React from 'react'
import './loginRegisterStyle/register.css'
import { Link } from "react-router-dom";


function Register() {
  return (
    <div className="login">

      <form className="login-form">
        <div className="inputs">
          <h2>Register</h2>
          <input
            className="input email"
            placeholder="Email address"
            type="text"
          />
          <input
            className="input email"
            placeholder="Username"
            type="text"
          />
          <input
            className="input email"
            placeholder="age"
            type="date"
          />
          <input
            className="input password"
            placeholder="Password"
            type="password"
          />
          <button className="btn lgn">Register</button>
        </div>

       <p>By clicking Register, you agree to our <a href='https://www.facebook.com/legal/terms/update'>Terms</a>, <a href='https://www.facebook.com/about/privacy/update'>Privacy</a> and <a href='https://www.facebook.com/policies/cookies/'>cokies policy</a></p>
        <hr />
        <h3>Already have an account? </h3>
        <Link to="/login">
          <button className="btn register">Sign in</button>
        </Link>

       
      </form>
    </div>
  )
}

export default Register