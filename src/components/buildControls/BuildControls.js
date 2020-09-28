import React from "react";
import "./BuildControls.css";

const BuildControls = (props) => {
  return (
    <div className="builds">
      <button onClick={props.showModel}>ADD LAYER</button>
      <br></br>
      <button onClick={props.openMenu}>MENU</button>
      <br></br>
      <button>Price: {props.price}</button>
      <br></br>
      <button>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;
