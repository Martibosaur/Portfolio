import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "popper.js";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import QrcodeState from "../src/context/qrcode/QrcodeState";

ReactDOM.render(
  // <React.StrictMode>
  <QrcodeState>
    <App />
  </QrcodeState>,
  // </React.StrictMode>,
  document.getElementById("root")
);
