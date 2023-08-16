import React, { useState } from "react";
import "./predictinput.css";
import photo from "C:/Storage/webapp/client/src/resources/login.png";
import axios from "axios";
import PredictOutput from "../PredictOutput/PredictOutput";
import { useNavigate } from "react-router-dom";

const PredictInput = () => {
  const Navigation = useNavigate();
  const url = "http://127.0.0.1:9000";
  const [resres, setResres] = useState("");
  const [data, setData] = useState({
    age: null,
    income: null,
    score: null,
  });
  const [active, setActive] = useState(true);

  function logout() {
    localStorage.clear();
    Navigation("/login");
  }

  function ssend(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url + "/predict", {
        age: parseInt(data.age),
        income: parseInt(data.income),
        score: parseInt(data.score),
      })
      .then((res) => {
        console.log(res);
        setResres(res.data);
        setActive(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Prediction-container">
      <div className="Prediction-img-container">
        <img src={photo} alt="Predictionimage" />
      </div>
      {active ? (
        <div className="Prediction-form">
          <h1 className="Prediction-form-H1">Customer Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Age:</label>
              <input
                placeholder="Enter Age"
                type="number"
                value={data.age}
                onChange={(e) => ssend(e)}
                min="1"
                max="100"
                required
                id="age"
              />
            </div>
            <div className="input-group">
              <label>Income:</label>
              <input
                placeholder="Enter Income"
                type="number"
                value={data.income}
                onChange={(e) => ssend(e)}
                id="income"
                min="1"
                required
              />
            </div>
            <div className="input-group">
              <label>Score:</label>
              <input
                placeholder="Enter Score"
                value={data.score}
                onChange={(e) => ssend(e)}
                type="number"
                id="score"
                min="1"
                max="100"
                required
              />
            </div>
            <button type="submit">Submit</button>
            <div class="logout">
              <button type="logout" onClick={logout}>
                logout
              </button>
            </div>
          </form>
        </div>
      ) : (
        <PredictOutput data={resres.label} lable={resres.cat} />
      )}
    </div>
  );
};

export default PredictInput;
