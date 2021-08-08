/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Mains from "./mains/index.js";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Mains />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
