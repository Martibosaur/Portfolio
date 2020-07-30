import React, { useContext } from "react";
import { QRCode } from "react-qr-svg";
// import Moment from "moment";

import QrcodeCreatorForm from "./QrcodeCreatorForm";
import QrcodeImportModal from "./QrcodeImportModal";
import QrcodeContext from "../../context/qrcode/qrcodeContext";
import "./QrcodeCreator.scss";

const Qrcode = () => {
  const qrcodeContext = useContext(QrcodeContext);
  const { qrcode } = qrcodeContext;
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <h1>QRCode Generator</h1>
        <QrcodeImportModal />
        <QRCode
          className="qrCodeCreated my-4"
          bgColor="#FFFFFF"
          fgColor="#000000"
          level="Q"
          style={{ width: 400 }}
          value={JSON.stringify(qrcode)}
        />
        <QrcodeCreatorForm />
      </div>
    </div>
  );
};

export default Qrcode;
