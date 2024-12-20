import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./components/HomePage";


const App = () => {
  return (
    <div>
      <h1>Music App</h1>
      <HomePage />
    </div>
  );
};

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);