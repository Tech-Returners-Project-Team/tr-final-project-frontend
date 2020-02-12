import React from "react";
import QuizData from "./components/QuizData";
import Quiz from "./components/Quiz";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: ""
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    // shuffledAnswerOptions will display answers in random order
    const shuffledAnswerOptions = QuizData.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: QuizData[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  // shuffledArray function
  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // this function should set the answer and the next question
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < QuizData.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Quiz</h2>
        </div>
        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={QuizData.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    );
  }
}

export default App;
