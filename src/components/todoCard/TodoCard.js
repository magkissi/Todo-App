import React from "react";
import Tag from "../tag/Tag";
import Button from "../button/Button";

import "./todoCard.css";

function TodoCard({ todoText, dueDate, createdDate, tagText }) {
  return (
    <div className="todoCard__container">
      <div className="todoCard__text">
        <p>{todoText}</p>
      </div>
      <div className="todoCard__date">
        <h5>Created on : {createdDate}</h5>
        <h5>Due date : {dueDate}</h5>
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
        <Tag text={tagText} />
      </div>
    </div>
  );
}

export default TodoCard;
