import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Components/Grid";
import Header from "./Components/Header";
import SubmitButton from "./Components/SubmitButton";
import SolutionButton from "./Components/SolutionButton";
import solveSuduko from "./SodokuAlgo/SudokuAlgo";
import Questions from "./QuestionBank/Questions";
var ind = Math.floor(Math.random() * 3);
let question = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
let res = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
let answer = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    question[i][j] = Questions[ind][i][j];
    res[i][j] = Questions[ind][i][j];
    answer[i][j] = Questions[ind][i][j];
  }
}

solveSuduko(answer, 0, 0);

function App() {
  return (
    <div className="app">
      <Header />
      <br></br>
      <Grid data={question} response={res} />
      <br></br>
      <SubmitButton
        response={res}
        ans={answer}
      />
      <br></br>
      <SolutionButton answer={answer} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("sudoku"));