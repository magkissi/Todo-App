import React from "react";
import "./select.css";

function Select() {
  return (
    <div className="select__container">
      <select id="tags">
        <option value="">Add a Tag</option>
        <option value="Urgent">Urgent</option>
        <option value="Daily">Daily</option>
        <option value="Monthly">Monthly</option>
      </select>
    </div>
  );
}

export default Select;
