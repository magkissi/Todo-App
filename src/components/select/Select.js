import React, { useState } from "react";
import "./select.css";

function Select({ options, onSelectChange }) {
  const [error, setError] = useState(false);

  return (
    <div className="select__container">
      <select id="tags" onChange={onSelectChange}>
        <option value="" disabled>
          Select a tag
        </option>
        {options.map((item) => (
          <option value={item} key={item}>
            {item}{" "}
          </option>
        ))}
      </select>
      {error === true ? <p>*field is required</p> : ""}
    </div>
  );
}

export default Select;
