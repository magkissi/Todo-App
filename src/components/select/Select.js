import React from "react";
import "./select.css";

function Select({ options, onSelectChange }) {
  return (
    <div className="select__container">
      <select id="tags" onChange={onSelectChange}>
        {options.map((item) => (
          <option value={item} key={item}>
            {item}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
