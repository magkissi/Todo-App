import React, { useState, useContext } from "react";
import "./home.css";
import TodoForm from "../../components/todo_form/TodoForm";
import Filter from "../../components/filter/Filter";
import { Context } from "../../components/Context";
import TodoCard from "../../components/todoCard/TodoCard";

function Home() {
  const [tags, setTags] = useState(["Urgent", "Daily"]);
  const [todo, setTodo] = useContext(Context);

  const handleAddTag = (newTag) => {
    setTags([...tags, newTag]);
  };

  return (
    <div className="home__container">
      <div className="home__todoForm">
        <TodoForm selectOptions={tags} />
        <div className="home__tag">
          <Filter tagItems={tags} onAddTag={handleAddTag} />
        </div>
      </div>

      <div className="home__todoItems">
        {todo.map((item) => (
          <TodoCard
            tagText={item.tags}
            key={item.createdDate}
            createdDate={item.createdDate}
            dueDate={item.DueDate}
            todoText={item.inputValue}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
