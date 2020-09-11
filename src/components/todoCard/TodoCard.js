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
      <div className="todoCard__date">
        <h5>Created on : </h5>
        <h5>Due date : </h5>
      </div>
      <div className="todoCard__details">
        <div className="todoCard__btn">
          <Button text="Done" color="#06CDF4" fontSize="15px" />
        </div>

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
