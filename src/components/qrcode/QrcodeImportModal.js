import React, { useState, useContext } from "react";
import QrcodeContext from "../../context/qrcode/qrcodeContext";

const QrcodeImportModal = () => {
  const [jsonText, setJSONtext] = useState("");
  const [showModal, setShowModal] = useState(false);
  // Form context
  const qrcodeContext = useContext(QrcodeContext);
  const { updateQrcode } = qrcodeContext;

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      const JsonText = JSON.parse(jsonText);
      updateQrcode({
        location: JsonText.location,
        items: JsonText.items,
      });
      setJSONtext("");
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowModal(true)}
      >
        Import QRCode
      </button>

      <div
        className={showModal ? "modal fade show d-block" : "modal fade d-none"}
        role="dialog"
        aria-labelledby="modalCenter"
        aria-hidden="true"
      >
        <form onSubmit={onSubmit}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Scan QRCode
                </h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <textarea
                  name="jsonText"
                  value={jsonText}
                  onChange={(e) => setJSONtext(e.target.value)}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QrcodeImportModal;
