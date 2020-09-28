import React from "react";
import Home from "./pages/home/home";
import "./App.css";
import { Provider } from "./components/Context";

function App() {
  return (
    <Provider>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
