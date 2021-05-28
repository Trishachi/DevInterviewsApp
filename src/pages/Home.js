import React from "react";
import Data from "../assets/data/data.json";

// import App, { onButtonClick } from "../App";

// export const onButtonClick = (evt) => {
//   console.log(evt.target.innerHTML);
//   // setCurrentView(evt.target.innerHTML);
// };

function Home(props) {
  return (
    <div>
      {Data.categories.map((category) => {
        // if (question.category.includes("javascript")) {
        //   return <h4 key={question.question_id}>{question.question}</h4>;
        return (
          <button className="select-category" onClick={props.buttonClicked}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export function Html() {
  return (
    <div>
      <h2>This is the HTML page</h2>
    </div>
  );
}

export default Home;
