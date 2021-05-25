import React from "react";
import Home from "./pages/Home";
import "./App.css";

import Data from "./assets/data/data.json";

function App() {
  function getData() {}

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
        <Home />
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
