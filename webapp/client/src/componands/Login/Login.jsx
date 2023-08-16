import React, { useState } from "react";
import login from "C:/Storage/webapp/client/src/resources/prediction.png";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const url = "http://localhost:8081/login";
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const newvalue = { ...value };
    newvalue[e.target.id] = e.target.value;
    setValue(newvalue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = {};
    if (!value.email) {
      validationErrors.email = "Email is required";
    }
    if (!value.password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log(value);

    axios
      .post(url, value)
      .then((res) => {
        console.log(res.data.Login);
        console.log(res.data.data); // Log the response received from the server
        if (res.data.Login) {
          localStorage.setItem("key", res.data.data);
          console.log("Login successful");

          //Protectedroutes(res.data.Login); // Log a success message
          navigate("/predictinput");
        } else {
          console.log("Not Registered"); // Log a failure message
          alert("Not Register");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="img-form">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              placeholder="example@wpform.xyz"
              value={value.email}
              onChange={handleChange}
              id="email"
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className="forgot-password">
            <Link to="/forgetpassword">Forgot Password?</Link>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={value.password}
              onChange={handleChange}
              placeholder="Enter a Password"
              id="password"
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="signup-link">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      <div className="img-container">
        <img src={login} alt="loginpageimage" />
      </div>
    </div>
  );
};

export default Login;
