import React from "react";
import "./home.css";
import TodoForm from "../../components/todo_form/TodoForm";
import Tags from "../../components/Tags";

function Home() {
  return (
    <div className="home__container">
      <TodoForm />
      <div className="home__tag">
        <Tags />
      </div>
    </div>
  );
}

export default Home;
