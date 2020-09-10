import React from "react";
import Tag from "../tag/Tag";
import Button from "../button/Button";

import "./todoCard.css";

function TodoCard() {
  return (
    <div className="todoCard__container">
      <div className="todoCard__text">
        <p>todo</p>
      </div>
      <div>
        <h4>Date : </h4>
      </div>
      <div className="todoCard__btn">
        <Button text="Done" />
        <div>
          <img src="/delete_icon.png" alt="delete" />
        </div>
      </div>
      <div className="todoCard__tag">
        <Tag text="complete" />
      </div>
    </div>
  );
}

export default TodoCard;
