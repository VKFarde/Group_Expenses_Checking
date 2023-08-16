import React from "react";
import {
  SignUp,
  ResetPassword,
  Login,
  ForgetPassword,
  Navbar,
  Homepage,
  PredictInput,
} from "./componands/index"; // Corrected import path
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Protectedroutes() {
  const token = localStorage.getItem("key");
  console.log(token);
  return token ? <PredictInput /> : <Navigate to="/login" />;
}

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />

          <Route path="/predictinput" element={<Protectedroutes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
