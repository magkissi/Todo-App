import React from "react";
import "./tags.css";
import Input from "./input/Input";

function Tags() {
  return (
    <div className="tags__container">
      <div className="tags__content">
        <Input type="text" placeholder="Add new Tags" />
        <button>
          <span id="icon">+</span>
        </button>
      </div>
      <div className="tag__items">
        <div className="tag__item">Completed</div>
        <div className="tag__item">Not Completed</div>
        <div className="tag__item">Urgent</div>
        <div className="tag__item">Daily</div>
      </div>
    </div>
  );
}

export default Tags;
