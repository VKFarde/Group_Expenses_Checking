import React from "react";
import "./predictoutput.css";
import { useNavigate } from "react-router-dom";

const PredictOutput = ({ data, lable }) => {
  const Navigation = useNavigate();

  function logout() {
    localStorage.clear();
    Navigation("/login");
  }
  console.log({ data });
  return (
    <div className="Prediction-form">
      <h1>Category:- {lable}</h1>
      <p>{data}</p>
      <div class="logoutp">
        <button type="logout" onClick={logout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default PredictOutput;
