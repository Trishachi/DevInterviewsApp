import React from "react";
import Data from "../assets/data/data.json";

function Home() {
  return (
    <div>
      {Data.categories.map((category) => {
        // if (question.category.includes("javascript")) {
        //   return <h4 key={question.question_id}>{question.question}</h4>;
        return <button className="select-category">{category}</button>;
      })}
    </div>
  );
}

export default Home;
