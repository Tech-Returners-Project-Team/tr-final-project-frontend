import React from "react";
import AnswerOption from "./AnswerOption.js";
import QuestionCount from "./QuestionCounter.js";
import Question from "./Question.js";

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
    <div key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question content={props.question} />
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  );
}

export default Quiz;
