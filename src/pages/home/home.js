import React, { useState } from "react";
import "./home.css";
import TodoForm from "../../components/todo_form/TodoForm";
import Filter from "../../components/filter/Filter";
import { Provider } from "../../components/Context";
import TodoCard from "../../components/todoCard/TodoCard";

function Home() {
  const [tags, setTags] = useState(["Urgent", "Daily"]);

  return (
    <Provider>
      <div className="home__container">
        <TodoForm selectOptions={tags} />
        <div className="home__tag">
          <Filter tagItems={tags} />
        </div>
        <div className="home__todo">
          <TodoCard />
        </div>
      </div>
    </Provider>
  );
}

export default Home;
