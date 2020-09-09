import React from "react";
import "./button.css";

function Button({ addItem }) {
  return (
    <div className="btn__container">
      <button onClick={addItem} id="todo__btn">
        Add Todo
      </button>
    </div>
  );
}

export default Button;
