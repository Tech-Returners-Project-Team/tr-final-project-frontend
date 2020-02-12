import React from "react";

function Result(props) {
  return (
    <div>
      Your perfect holiday destination is <strong>{props.quizResult}</strong>!
    </div>
  );
}

export default Result;
