import React, { useState, useContext, useEffect } from "react";
import QrcodeContext from "../../context/qrcode/qrcodeContext";

var generateId = function () {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const QrcodeCreatorForm = () => {
  // Form state
  const [location, setLocation] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  // Form context
  const qrcodeContext = useContext(QrcodeContext);
  const { qrcode, updateQrcode } = qrcodeContext;

  useEffect(() => {
    setLocation(qrcode.location);
    setItems(qrcode.items);
  }, [qrcode]);

  // Functions
  const addItem = () => {
    if (items.length >= 10) {
      setError("Cannot have more than 10 items!");
    } else {
      // Reorder items
      setItems([
        ...items,
        {
          id: generateId(),
          name: "None-set",
          quantity: 0,
        },
      ]);
      setError(null);
    }
  };

  const updateItem = (e, item) => {
    setItems(
      items.map((x) =>
        x.id === item.id ? { ...x, [e.target.name]: e.target.value } : x
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setError(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateQrcode({
      location: location.toUpperCase(),
      items,
    });
  };

  return (
    <div className="creator-form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            name="location"
            className="form-control"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        {items.length > 0 && (
          <div className="items">
            {items.map((item, index) => (
              <div key={item.id} className="form-row item my-2">
                <div className="col-md-1">
                  <h4>{index + 1} </h4>
                </div>
                <div className="col-md-7">
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    value={item.name}
                    onChange={(e) => updateItem(e, item)}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    name="quantity"
                    className="form-control"
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateItem(e, item)}
                  />
                </div>
                <div className="col-md-1">
                  <button
                    type="button"
                    className="btn btn-delete"
                    onClick={() => removeItem(item.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {error !== null && <h4 className="text-danger text-center">{error}</h4>}
        <div className="d-flex justify-content-between mt-4 mx-2">
          <button type="button" className="btn btn-success" onClick={addItem}>
            Add Item
          </button>
          <button type="submit" className="btn btn-warning mx-2">
            Update Qrcode
          </button>
        </div>
      </form>
    </div>
  );
};

export default QrcodeCreatorForm;
