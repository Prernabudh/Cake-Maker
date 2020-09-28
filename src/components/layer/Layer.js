import React from "react";
import "./Layer.css";
import Cream from "../cream/Cream";

const Layer = (props) => {
  return (
    <div
      style={{
        width: props.width,
        marginLeft: props.marginLeft,
      }}
      className="layer-container"
    >
      <div
        className="cream"
        style={{
          backgroundColor: props.flavour.baseFlavour,
          background:
            "linear-gradient(" +
            props.flavour.baseFlavour +
            "," +
            props.flavour.baseLight +
            ")",
          boxShadow: "inset -15px 0" + props.flavour.baseFlavour,
          cursor: "pointer",
        }}
        onClick={() => props.handleEditDelete(props.flavour.id)}
      >
        <Cream color={props.flavour.creamFlavour}></Cream>
      </div>
    </div>
  );
};

export default Layer;
