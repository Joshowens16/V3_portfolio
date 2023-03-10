import React from "react";
import Home from "./Home";
import "./nav.css";

const navButtons = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Projects",
  },
  {
    name: "Contact Me",
  },
];
function App() {
  return (
    <div className="App">
      <nav className="navContainer">
        <div>
          <h1>Josh Owens</h1>
        </div>
        <div className="navBtns">
          {navButtons.map((section) => {
            return <button>{section.name}</button>;
          })}
        </div>
        <div className="resume">
          <button>Resume</button>
        </div>
      </nav>
      <Home />
    </div>
  );
}

export default App;
