import React from "react";
import Modal from "../../components/modal/Modal";
import Dropdown from "../../components/dropdown/Dropdown";
import "./AddLayer.css";

const AddLayer = (props) => {
  return (
    <Modal show={props.show} modalClosed={props.modalClosed}>
      <center>
        <h2 className="add-layer-heading">
          {props.edit ? "Edit this layer" : "Add a layer"}
        </h2>
      </center>
      <Dropdown
        options={props.creamOptions}
        label="Select cream flavour"
        name="cream"
        value={props.input.cream}
        onChange={(e) => props.inputChangeHandler(e)}
      ></Dropdown>
      <Dropdown
        options={props.baseOptions}
        label="Select base flavour"
        name="base"
        value={props.input.base}
        onChange={(e) => props.inputChangeHandler(e)}
      ></Dropdown>
      <br></br>
      <center>
        {props.edit ? (
          <button onClick={props.editLayerHandler} className="add-layer-button">
            EDIT
          </button>
        ) : (
          <button onClick={props.addLayerHandler} className="add-layer-button">
            ADD
          </button>
        )}
      </center>
    </Modal>
  );
};

export default AddLayer;
