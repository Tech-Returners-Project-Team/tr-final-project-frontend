import React from "react";
import { QuizData } from "QuizData";
import "./App.css";

class App extends React.Component {
  state = {
    userAnswer: null,
    currentQuestion: 1,
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
    return <div className="App"></div>;
  }
}

export default App;
