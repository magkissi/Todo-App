import React, { useContext, useState } from "react";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import "./todoForm.css";
import Button from "../button/Button";
import { Context } from "../Context";

function TodoForm({ selectOptions }) {
  const [todo, setTodo] = useContext(Context);
  const [todoItem, setTodoItem] = useState("");

  const handleInputChange = (e) => {
    let newItem = e.target.value;
    setTodoItem(newItem);
  };

  const handleClick = (e) => {
    setTodo((prevTodo) => [todoItem, ...prevTodo]);
    e.preventDefault();
    console.log(todo);
  };
  return (
    <div className="form">
      <div className="form__items">
        <Input
          onTextChange={handleInputChange}
          type="text"
          placeholder="Enter Todo"
        />
      </div>
      <div className="form__items">
        <Select options={selectOptions} id="select" />
      </div>
      <div className="form__items">
        <label>Set Due date :</label>
        <Input onTextChange={handleInputChange} id="input2" type="date" />
      </div>
      <div className="form__items">
        <Button clickButton={handleClick} text="Add to do" />
      </div>
    </div>
  );
}

export default TodoForm;
