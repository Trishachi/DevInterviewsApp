import React from "react";
import Data from "../assets/data/data.json";

function Home(props) {
  return (
    <div>
      {/* {Data.categories.map((category) => {
        return (
          <button className="select-category" onClick={props.buttonClicked}>
            {category}
          </button>
        );
      })} */}
    </div>
  );
}

export function Html() {
  return (
    <div>
      {Data.questions.map((question) => {
        if (question.category.includes("html")) {
          return <h4 key={question.question_id}>{question.question}</h4>;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export function Css() {
  return (
    <div>
      {Data.questions.map((question) => {
        if (question.category.includes("css")) {
          return <h4 key={question.question_id}>{question.question}</h4>;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export function Js() {
  return (
    <div>
      {Data.questions.map((question) => {
        if (question.category.includes("javascript")) {
          return <h4 key={question.question_id}>{question.question}</h4>;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export function General() {
  return (
    <div>
      {Data.questions.map((question) => {
        if (question.category.includes("general")) {
          return <h4 key={question.question_id}>{question.question}</h4>;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Home;
