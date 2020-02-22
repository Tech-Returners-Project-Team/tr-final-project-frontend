import React from "react";


function AnswerOption(props) {
  return (
    <div class="container-ans">
      <input
        type="radio" hidden
        checked={props.answerCity === props.answer}
        id={props.answerCity}
        value={props.answerCity}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label class="btn" htmlFor={props.answerCity}>
        {props.answerOption}
      </label>
    </div>
  );
}
export default AnswerOption;
