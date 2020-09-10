import React, { useState, createContext } from "react";

export const Context = createContext();

export const Provider = (props) => {
  const [todo, setTodo] = useState([]);
  return (
    <Context.Provider value={[todo, setTodo]}>
      {props.children}
    </Context.Provider>
  );
};
