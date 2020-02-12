import React from "react";
import Question from "/Question";
import QuestionCount from "/QuestionCounter";
import AnswerOption from "/AnswerOption";

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.option}
        answerContent={key.option}
        answerType={key.city}
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
