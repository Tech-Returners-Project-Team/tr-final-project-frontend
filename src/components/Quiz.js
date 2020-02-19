import React from "react";
import AnswerOption from "./AnswerOption.js";
import QuestionCount from "./QuestionCounter.js";
import Question from "./Question.js";
import "../Style.css";


function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.option}
        answerOption={key.option}
        answerCity={key.city_key}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  return (
    <div class= "container" key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question content={props.question} />
      < div class=" btn-grid">
        {props.answerOptions.map(renderAnswerOptions)}
      </ div>
    </div>
  );
}

export default Quiz;
