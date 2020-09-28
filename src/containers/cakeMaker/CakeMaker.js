import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Layers from "../layers/Layers";
import "./CakeMaker.css";
import Menu from "../../components/menu/Menu";

const CakeMaker = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => {
    setShowMenu(false);
  };
  const openMenu = () => {
    setShowMenu(true);
  };
  return (
    <>
      <Menu show={showMenu} modalClosed={closeMenu}></Menu>
      <div className="cakemaker-container">
        <Navbar></Navbar>
        <div className="cake">
          <Layers openMenu={openMenu}></Layers>
        </div>
      </div>
    </>
  );
};

export default CakeMaker;
