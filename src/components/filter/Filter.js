import React from "react";
import "./filter.css";
import Input from "../input/Input";
import Tag from "../tag/Tag";

function Filter({ tagItems }) {
  return (
    <div className="tags__container">
      <div className="tags__content">
        <Input type="text" placeholder="Add new filter tag" />
        <button>
          <span id="icon">+</span>
        </button>
      </div>
      <div className="tag__items">
        {tagItems.map((tagItem) => (
          <Tag key={tagItem} text={tagItem} />
        ))}
      </div>
    </div>
  );
}

export default Filter;
