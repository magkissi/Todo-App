import React from "react";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import "./todoForm.css";
import Button from "../button/Button";

function TodoForm() {
  const handleInputChange = (e) => {
    let value = e.target.value;
    console.log(value);
  };

  const handleClick = () => {
    console.log("this");
  };
  return (
    <form className="form">
      <div className="form__items">
        <Input
          onTextChange={handleInputChange}
          type="text"
          placeholder="Enter Todo"
        />
      </div>
      <div className="form__items">
        <Select id="select" />
      </div>
      <div className="form__items">
        <label>Set Due date :</label>
        <Input onTextChange={handleInputChange} id="input2" type="date" />
      </div>
      <div className="form__items">
        <Button clickButton={handleClick} />
      </div>
    </form>
  );
}

export default TodoForm;
