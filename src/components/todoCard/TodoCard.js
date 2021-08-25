import React, { useState } from "react";
import Tag from "../tag/Tag";

import "./todoCard.css";

function TodoCard({ todoText, dueDate, createdDate, tagText, handleDelete }) {
  const [option, setOption] = useState("Not Completed");

  const handleChange = (e) => {
    setOption(e.target.value);
  };
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
          <select
            onChange={handleChange}
            style={
              option == "Completed" ? { background: "green", color: "red" } : {}
            }
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <img onClick={handleDelete} src="/delete_icon.png" alt="delete" />
        </div>
      </div>
      <div className="todoCard__tag">
        Todo type : <Tag text={tagText} />
      </div>
    </div>
  );
}

export default TodoCard;
