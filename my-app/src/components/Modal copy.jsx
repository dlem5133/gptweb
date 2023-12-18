import { useRef } from "react";

const styleOverlay = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: "50",
};

const styleContents = {
  position: "fixed",
  width: "50%",
  height: "50%",
  left: "25%",
  top: "25%",
  backgroundColor: "white",
  margin: "auto",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
  padding: "20px",
};

const Modal = ({ data, fnCloseModal }) => {
  const overlay = useRef(null);
  return (
    <div
      style={styleOverlay}
      ref={overlay}
      onClick={(event) => {
        if (event.target == overlay.current) {
          fnCloseModal();
        }
      }}
    >
      <div style={styleContents}>{data}</div>
    </div>
  );
};
export default Modal;
