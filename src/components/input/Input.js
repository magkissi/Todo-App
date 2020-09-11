import React from "react";
import "./input.css";

function Input({ type, placeholder, onTextChange, color }) {
  return (
    <div className="input__container">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onTextChange}
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default Input;
