import React, { useState, useEffect } from "react";
import "./App.css";
import reactDom from "react-dom";

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
      <h2>Main</h2>
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

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }
  return <div>No User Found</div>;

  // return (
  //   <div className="App">
  //     <Header />
  //     <Main />
  //     <Footer />
  //   </div>
  // );
}

export default App;
