import React from "react";
import "./select.css";

function Select({ options }) {
  return (
    <div className="select__container">
      <select id="tags">
        {options.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
