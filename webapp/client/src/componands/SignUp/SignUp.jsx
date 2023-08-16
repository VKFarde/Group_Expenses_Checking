import React, { useState } from "react";
import "./signup.css";
import image from "C:/Storage/webapp/client/src/resources/SIGNUP.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const url = "http://localhost:8081/signup";
  const [value, setValue] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const newvalue = { ...value };
    newvalue[e.target.id] = e.target.value;
    setValue(newvalue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = {};

    if (!value.fullName.trim()) {
      validationErrors.fullName = "Full Name is required.";
    }

    if (!value.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
      validationErrors.email = "Email is invalid.";
    }

    if (!value.password) {
      validationErrors.password = "Password is required.";
    } else if (value.password.length < 6) {
      validationErrors.password =
        "Password should be at least 6 characters long.";
    }

    if (value.password !== value.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }

    // Handle form submission logic here, such as sending data to an API or validating inputs

    axios
      .post(url, value)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });

    // Reset form fields and errors

    setValue({ fullName: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
  };

  return (
    <div className="signup-img">
      <div className="signup-img-container">
        <img src={image} alt="signupimage" className="scaled-image" />
      </div>

      <form onSubmit={handleSubmit} className="sign-up-form">
        <div className="signupform-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            placeholder="Firstname Lastname"
            type="text"
            id="fullName"
            value={value.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>
        <div className="signupform-group">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="example@wpform.xyz"
            type="email"
            id="email"
            value={value.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="signupform-group">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="**************"
            type="password"
            id="password"
            value={value.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="signupform-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            placeholder="Re-Enter Password"
            type="password"
            id="confirmPassword"
            value={value.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="signupbutton">
          <button type="submit">Sign Up</button>
        </div>
        <div className="loinlink">
          <Link to="/login">Already have an account? Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
