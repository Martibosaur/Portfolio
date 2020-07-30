import React, { useReducer } from "react";
import QrcodeContext from "./qrcodeContext";
import QrcodeReducer from "./qrcodeReducer";

const QrcodeState = (props) => {
  const initialState = {
    qrcode: {
      location: "",
      items: [],
    },
  };
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(QrcodeReducer, initialState);

  // Functionality
  const updateQrcode = (data) => {
    console.log(JSON.stringify(data));
    dispatch({
      type: "updateQrcode",
      payload: data,
    });
  };

  return (
    <QrcodeContext.Provider
      value={{
        qrcode: state.qrcode,
        updateQrcode,
      }}
    >
      {props.children}
    </QrcodeContext.Provider>
  );
};

export default QrcodeState;
