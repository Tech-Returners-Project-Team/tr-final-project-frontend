import React from "react";
import { QuizData } from "./QuizData";
import "./App.css";

class App extends React.Component {
  state = {
    userAnswer: null,
    currentQuestion: 0,
    options: []
  };

  loadQuiz = () => {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        questions: QuizData[currentQuestion].question,
        options: QuizData[currentQuestion].options,
        answers: QuizData[currentQuestion].answers
      };
    });
  };

  componentDidMount() {
    this.loadQuiz();
  }

  render() {
    const { questions, options } = this.state;
    return (
      <div className="App">
        {questions}
        {options.map(option => (
          <p key={option.id}>{option}</p>
        ))}
      </div>
    );
  }
}

export default App;
