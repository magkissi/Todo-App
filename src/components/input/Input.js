import React, { useState, useEffect } from "react";
import "./input.css";

function Input({
  type,
  placeholder,
  onTextChange,
  color,
  isRequired,
  resetValue,
}) {
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("reset", resetValue);
    if (resetValue === true) {
      setInput("");
    }
  });

  const handleError = () => {
    if (isRequired === true) {
      if (input === "") {
        setError(true);
      } else {
        setError(false);
      }
    }
    if (error === false) {
      onTextChange(input);
    }
  };

  const handleInput = (e) => {
    let inputText = e.target.value;
    setInput(inputText);
  };

  return (
    <div className="input__container">
      <input
        onBlur={handleError}
        type={type}
        placeholder={placeholder}
        onChange={handleInput}
        style={{ backgroundColor: color }}
        value={input}
      />
      {error === true ? <p>*field is required</p> : ""}
    </div>
  );
}

export default Input;
