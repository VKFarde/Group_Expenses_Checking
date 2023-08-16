import React, { useState } from "react";
import photo from "C:/Storage/webapp/client/src/resources/forget_password.jpg";
import "./forget_password.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="photo-form-container">
      <div className="photo-container">
        <img src={photo} alt="forgetpagephoto" />
      </div>
      <div className="forgetpage-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Enter a Registered Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
