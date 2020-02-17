import React from "react";

function Result(props) {
  return (
    <div>
      Your perfect holiday destination is{" "}
      <strong>{props.quizResult.title}</strong>!
      <img src={props.quizResult.picture} />
    </div>
  );
}

export default Result;
