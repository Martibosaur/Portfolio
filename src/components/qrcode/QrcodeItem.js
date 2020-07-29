import React from "react";

const QrcodeItem = ({ item, qrCodeItems, setQrCodeItems }) => {
  const { id, name, quantity } = item;

  const updateItem = (index, updatedField) => {
    let items = [...qrCodeItems];
    let item = { ...items[index], updatedField };
    item[index] = item;
    setQrCodeItems([items]);
  };

  return (
    <div className="row">
      <div className="col-9">
        <label htmlFor={`item-${id}`}>Item-{id + 1}</label>
        <input
          className="form-control"
          name={`item-${id}`}
          type="text"
          placeholder="Code/Name"
          value={name}
          onChange={(e) => {
            updateItem(id, { name: e.target.value });
          }}
        />
      </div>
      <div className="col-3">
        <label htmlFor={`item-${id}`}>Item-{id + 1}</label>
        <input
          className="form-control"
          name={`item-${id}`}
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => {
            updateItem(id, { quantity: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default QrcodeItem;
