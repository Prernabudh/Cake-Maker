import React from "react";
import "./Modal.css";
import Backdrop from "../backdrop/Backdrop";

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default React.memo(Modal);
