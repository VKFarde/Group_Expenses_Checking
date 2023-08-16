import React, { useState } from "react";
import Photo from "C:/Storage/webapp/client/src/resources/reset_password.jpg";
import "./resetpassword.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation on email, newPassword, and confirmPassword
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setSuccessMessage("Password reset successfully.");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="photo-password-reset">
      <div className="photo-reset">
        <img src={Photo} alt="resetphotopassword" />
      </div>
      <div className="reaset-container">
        <h2>Reset Password</h2>
        {successMessage && <p>{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
