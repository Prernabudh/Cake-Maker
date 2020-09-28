import React from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <p className="label">{props.label} :</p>
      <select onChange={props.onChange} name={props.name} value={props.value}>
        {props.options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
