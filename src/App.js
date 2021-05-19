import React, { useState, useEffect } from "react";
import "./App.css";
import reactDom from "react-dom";
import Data from "./assets/data/data.json";

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <p>Main</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <h2>Footer</h2>
    </footer>
  );
}

//https://api.github.com/users/trishachi

function App() {
  const getData = () => {
    for (var i = 0; i < Data.questions.length; i++) {
      console.log(Data.questions.question);
    }
  };

  return (
    <div className="App">
      <Header />
      <Main getData={this.getData} />
      <Footer />
    </div>
  );
}

export default App;
