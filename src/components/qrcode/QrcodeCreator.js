import React, { useState } from "react";
import { QRCode } from "react-qr-svg";
import Moment from "moment";

import "./QrcodeCreator.scss";

const Qrcode = () => {
  const [qrCode, setQrCode] = useState({});
  const [location, setLocation] = useState("n/a");

  const onSubmit = (e) => {
    e.preventDefault();
    setQrCode({
      date: Moment().format("MMMM Do YYYY, h:mm:ss a"),
    });
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <h1>QRCode Generator</h1>
        <QRCode
          className="qrCodeCreated my-4"
          bgColor="#FFFFFF"
          fgColor="#000000"
          level="Q"
          style={{ width: 300 }}
          value={JSON.stringify(qrCode)}
        />
        <form className="col-md-6" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              className="form-control"
              name="location"
              type="text"
              placeholder="Racking location (e.g. A02A05)"
              onChange={(e) => {
                setQrCode({
                  ...qrCode,
                  location: e.target.value.toUpperCase(),
                });
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Download
          </button>
        </form>
      </div>
    </div>
  );
};

export default Qrcode;
