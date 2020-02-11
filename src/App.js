import React from "react";
import { QuizData } from "QuizData";
import "./App.css";

class App extends React.Component {
  state = {
    userAnswer: null,
    currentQuestion: 1,
    options: []
  };

  render() {
    return <div className="App"></div>;
  }
}

export default App;
