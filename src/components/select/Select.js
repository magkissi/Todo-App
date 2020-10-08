import React, { useState, useEffect } from "react";
import "./select.css";

function Select({ options, onSelectChange, resetValue }) {
  const [error, setError] = useState(false);
  const [option, setOption] = useState("");

  useEffect(() => {
    onSelectChange(option);
  }, [option]);

  useEffect(() => {
    if (resetValue === true) {
      setOption("");
    }
  });

  const selectOption = (e) => {
    let optionValue = e.target.value;
    setOption(optionValue);
  };

  return (
    <div className="select__container">
      <select id="tags" onChange={selectOption} value={option}>
        <option value="">Select a tag</option>
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
