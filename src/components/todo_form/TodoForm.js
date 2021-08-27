import React, { useContext, useState } from "react";
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
  const [error, setError] = useState(false);
  const [reset, setReset] = useState(false);

  const handleInputChange = (input) => {
    setTodoItem(input);
  };

  const handleSelectChange = (option) => {
    setTodoTags(option);
  };

  const handleDateChange = (date) => {
    setTodoDate(date);
  };

  const handleReset = () => {
    setReset(false);
  };

  const handleClick = () => {
    if (todoItem === "" || todoTags === "" || todoDate === "") {
      setError(true);
    } else {
      setError(false);
      const summaryTodo = {
        inputValue: todoItem,
        tags: todoTags,
        DueDate: todoDate,
        createdDate: new Date(Date.now()).toLocaleString().split("-"),
        id: Date.now(),
      };

      setTodo((prevTodos) => [summaryTodo, ...prevTodos]);
      setReset(true);
    }
  };

  return (
    <div className="form">
      <div className="form__items">
        <Input
          inputReset={handleReset}
          resetValue={reset}
          isRequired={true}
          onTextChange={handleInputChange}
          type="text"
          placeholder="Enter Todo"
        />
      </div>
      <div className="form__items">
        <Select
          resetValue={reset}
          options={selectOptions}
          id="select"
          onSelectChange={handleSelectChange}
        />
      </div>
      <div className="form__items">
        <label>Set Due date :</label>
        <Input
          inputReset={handleReset}
          resetValue={reset}
          onTextChange={handleDateChange}
          id="input2"
          type="date"
          isRequired={true}
        />
      </div>
      <div className="form__items">
        <Button clickButton={handleClick} text="Add to do" color="#06CDF4" />
        {error === true ? <p>*fill all empty fields</p> : ""}
      </div>
    </div>
  );
}

export default TodoForm;
