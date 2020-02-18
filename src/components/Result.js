import React from "react";

function Result(props) {
  return (
    <div>
      {/*Your perfect holiday destination is {props.quizResult}*/}
      Your perfect holiday destination is{" "}
      <strong>{props.quizResult.city}</strong>
    </div>
  );
}

export default Result;
