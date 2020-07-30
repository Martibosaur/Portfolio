export default (state, action) => {
  switch (action.type) {
    case "updateQrcode":
      return {
        ...state,
        qrcode: action.payload,
      };
    // Cases
    default:
      return state;
  }
};
