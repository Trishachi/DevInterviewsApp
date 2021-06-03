import React, { useState } from "react";
import { Html, Css, Js } from "./pages/Pages";
import Data from "./assets/data/data.json";
import "./App.css";

function App(props) {
  const [currentPage, setCurrentPage] = useState("Home");

  function buttonClicked(evt) {
    console.log(evt.target.innerHTML + " Button Clicked");
    setCurrentPage(evt.target.innerHTML);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Developer Interview Questions App</h1>
        <h2>
          Short description of how the app works and what the app is all about
          ie aims to achieve
        </h2>
        <button className="call-to-action">
          Select a Category below to begin
        </button>
      </header>
      <main>
        {currentPage === "Home" &&
          Data.categories.map((category) => {
            return (
              <button className="select-category" onClick={buttonClicked}>
                {category}
              </button>
            );
          })}
        {currentPage === "html" && <Html />}
        {currentPage === "css" && <Css />}
        {currentPage === "javascript" && <Js />}
      </main>
      <footer>
        <p className="copyright font-italic">
          <em>Copyright © 2020 | Chisom Trisha Okoye </em>
        </p>
      </footer>
    </div>
  );
}

export default App;
