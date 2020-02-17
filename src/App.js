import React from "react";
import QuizData from "./components/QuizData";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
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

  //this function sets user answer and answerCount
  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  //this function sets next question and updates state
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: QuizData[counter].question,
      answerOptions: QuizData[counter].answers,
      answer: ""
    });
  }

  // this function will figure out which city gets max result
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  // this function will show result
  // if  there is two or more cities with the same score it will show message --> Try again!
  setResults(result) {
    console.log(result); // "rio_da_janeiro"
    // city: Rio de Janeiro, city_key: rio_de_janeiro
    // destinations/rio_de_janeiro
    // make axios request to fetch the result
    // then
    // set the state with the response data (response.data)
    // { id: 3, city: "Rio de Janeiro", img_url: "https://abc.com/k.jpg",... }
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Try again!" });
    }
  }

  //this function renders Quiz
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={QuizData.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  // this function renders Result
  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Holiday Destination Quiz</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
