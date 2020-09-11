import React, { useContext, useState, useEffect } from "react";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import "./todoForm.css";
import Button from "../button/Button";
import { Context } from "../Context";

function TodoForm({ selectOptions }) {
  const [todo, setTodo] = useContext(Context);
  const [todoItem, setTodoItem] = useState("");
  const [todoTags, setTodoTags] = useState([]);
  const [todoDate, setTodoDate] = useState("");
  useEffect(() => {
    console.log("youu", todo);
  }, [todo]);

  const handleInputChange = (e) => {
    let newItem = e.target.value;
    setTodoItem(newItem);
  };

  const handleSelectChange = (e) => {
    let todoTags = e.target.value;
    setTodoTags((prevTags) => [todoTags, ...prevTags]);
  };

  const handleDateChange = (e) => {
    let todoDate = e.target.value;
    setTodoDate(todoDate);
  };

  const handleClick = (e) => {
    const summaryTodo = {
      inputValue: todoItem,
      tags: todoTags,

      DueDate: todoDate,
      createdDate: Date.now(),
    };

    setTodo((prevTodos) => [summaryTodo, ...prevTodos]);
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
        <Select
          options={selectOptions}
          id="select"
          onSelectChange={handleSelectChange}
        />
      </div>
      <div className="form__items">
        <label>Set Due date :</label>
        <Input onTextChange={handleDateChange} id="input2" type="date" />
      </div>
      <div className="form__items">
        <Button clickButton={handleClick} text="Add to do" color="#06CDF4" />
      </div>
    </div>
  );
}

export default TodoForm;
