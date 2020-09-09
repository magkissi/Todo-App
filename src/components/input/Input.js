import React from "react";
import "./input.css";

function Input({ type, placeholder, onTextChange }) {
  return (
    <div className="input__container">
      <input type={type} placeholder={placeholder} onChange={onTextChange} />
    </div>
  );
}

export default Input;
