import React from "react";
import "./button.css";

function Button({ clickButton, text, color, fontSize }) {
  return (
    <div className="btn__container">
      <button
        onClick={clickButton}
        id="todo__btn"
        style={{ backgroundColor: color, fontSize: fontSize }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
