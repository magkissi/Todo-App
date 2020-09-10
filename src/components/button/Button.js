import React from "react";
import "./button.css";

function Button({ clickButton, text }) {
  return (
    <div className="btn__container">
      <button onClick={clickButton} id="todo__btn">
        {text}
      </button>
    </div>
  );
}

export default Button;
