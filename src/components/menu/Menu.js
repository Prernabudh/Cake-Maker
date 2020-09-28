import React from "react";
import Modal from "../modal/Modal";
import cake from "../../assets/images/cheesecake.png";
import strawberry from "../../assets/images/strawberry.png";
import chocolate from "../../assets/images/chocolate.png";
import pineapple from "../../assets/images/pineapple.png";
import blueberry from "../../assets/images/blueberry.png";
import vanilla from "../../assets/images/vanilla.png";
import redvelvet from "../../assets/images/red-velvet.png";
import "./Menu.css";

const Menu = (props) => {
  return (
    <Modal show={props.show} modalClosed={props.modalClosed}>
      <div className="menu-card">
        <h2 className="menu-heading">Welcome to cake love!</h2>
        <div className="menu-base">
          <img src={cake} alt="cake"></img>
          <div className="base-price">
            <p>
              Base starts at Rupees 100 and increases by 100 with every layer.
            </p>
          </div>
        </div>
        <div className="cream">
          <div>Frosting Flavour</div>
          <div>Frosting Price (Rupees)</div>
          <div className="flavour">
            <div>Vanilla</div>
            <img src={vanilla} alt="vanilla" className="flavour-icon"></img>
          </div>
          <div>100</div>
          <div className="flavour">
            <div>Strawberry</div>
            <img
              src={strawberry}
              alt="strawberry"
              className="flavour-icon"
            ></img>
          </div>
          <div>150</div>
          <div className="flavour">
            <div>Pineapple</div>
            <img
              src={pineapple}
              alt="strawberry"
              className="flavour-icon"
            ></img>
          </div>
          <div>200</div>
          <div className="flavour">
            <div>Chocolate</div>
            <img
              src={chocolate}
              alt="strawberry"
              className="flavour-icon"
            ></img>
          </div>
          <div>250</div>
          <div className="flavour">
            <div>Blueberry</div>
            <img
              src={blueberry}
              alt="strawberry"
              className="flavour-icon"
            ></img>
          </div>
          <div>250</div>
          <div className="flavour">
            <div>Red Velvet</div>
            <img
              src={redvelvet}
              alt="strawberry"
              className="flavour-icon"
            ></img>
          </div>
          <div>300</div>
        </div>
      </div>
    </Modal>
  );
};

export default Menu;
