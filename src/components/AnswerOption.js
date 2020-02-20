import React from "react";

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerCity === props.answer}
        id={props.answerCity}
        value={props.answerCity}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerCity}>
        {props.answerOption}
      </label>
    </li>
  );
}
export default AnswerOption;
