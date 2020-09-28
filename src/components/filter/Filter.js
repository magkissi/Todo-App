import React, { useState } from "react";
import "./filter.css";
import Input from "../input/Input";
import Tag from "../tag/Tag";

function Filter({ tagItems, onAddTag }) {
  const [tag, setTag] = useState("");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleClick = () => {
    onAddTag(tag);
  };

  return (
    <div className="tags__container">
      <div className="tags__content">
        <Input
          isRequired={true}
          type="text"
          placeholder="Add new filter tag"
          onTextChange={handleTagChange}
        />
        <button onClick={handleClick}>
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
