//const express = require("express");
import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webapp",
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (`fullname`,`email`,`password`) VALUES (?) ";

  const values = [req.body.fullName, req.body.email, req.body.password];

  db.query(sql, [values], (err, result) => {
    if (err) {
      return res.json({ Message: "ERROR  " });
    } else {
      return res.json(result);
    }
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);

  const sql =
    "SELECT `email`, `password` FROM `login` WHERE email = ? AND password = ?";
  console.log(req.body.email, req.body.password);

  db.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ err });
    console.log(result);
    console.log(result.length);

    const JWT_SECRET = "helloIamVedant";
    const token = jwt.sign({ email: req.body.email }, JWT_SECRET);

    console.log(token);
    if (result.length > 0) {
      res.json({ Login: true, data: token });
    } else {
      res.json({ Login: false });
    }
  });
});

app.listen(8081, () => {
  console.log("jfdghwsifgihgfigwi");
});
