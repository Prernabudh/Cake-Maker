import React from "react";
import "./Message.css";
import cake from "../../assets/images/wedding-cake.png";
import girl from "../../assets/images/girl.png";

const Message = (props) => {
  return (
    <div
      className="message"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <div className="handles">
        <div className="handle"></div>
        <div className="handle"></div>
      </div>
      <div className="message-box">
        <div className="bolts">
          <div className="bolt"></div>
          <div className="bolt"></div>
        </div>
        <div className="message-content">
          <img src={cake}></img>
          <div className="message-text">{props.text}</div>
          <img src={girl}></img>
        </div>
      </div>
    </div>
  );
};

export default Message;
