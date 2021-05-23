import React from "react";
import "./App.css";

import Data from "./assets/data/data.json";

function App() {
  function getData() {}

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Developer Interview Questions App</h1>
        <h2>
          Short description of how the app works and waht the appis all about ie
          aims to achieve
        </h2>
        <button className="call-to-action">
          Select a Category below to begin
        </button>
      </header>
      <main>
        <div>
          {Data.categories.map((category) => {
            // if (question.category.includes("javascript")) {
            //   return <h4 key={question.question_id}>{question.question}</h4>;
            return <button className="select-category">{category}</button>;
          })}
        </div>
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
