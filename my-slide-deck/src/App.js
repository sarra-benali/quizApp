import React, { useState } from "react";
import "./App.css";

function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "What is the capital of France?",
      options: [
        { id: 0, text: "Paris", isCorrect: true },
        { id: 1, text: "Berlin", isCorrect: false },
        { id: 2, text: "Madrid", isCorrect: false },
        { id: 3, text: "Rome", isCorrect: false },
      ]
    },
    {
      question: "What is the largest planet in our solar system?",
      options: [
        { id: 0, text: "Jupiter", isCorrect: true },
        { id: 1, text: "Saturn", isCorrect: false },
        { id: 2, text: "Uranus", isCorrect: false },
        { id: 3, text: "Neptune", isCorrect: false },
      ]
    },
    {
      question: "Who is the current president of the United States?",
      options: [
        { id: 0, text:"Barack Obama", isCorrect: false },
        { id: 1, text: "Donald Trump", isCorrect: false },
        { id: 2, text: "Joe Biden", isCorrect: true },
        { id: 3, text:  "Hillary Clinton", isCorrect: false },
      ]
    },
  ];

  const optionClicked = (isCorrect) => {
    if( isCorrect){
      setScore(score + 1)
    }
    if(currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion+1)
    }else{
      setFinalResults(true)
    }
  }

  const restartGame = () =>{
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  return (
    <div className="App">
      {/* 1. Header */}
      <h1>Quiz</h1>

      {/* 2. current score */}
      <h2>Current score : {score}</h2>
      {showFinalResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>{score} out of {questions.length} correct - ({(score/questions.length) * 100}%)</h2>
          <button onClick={() => restartGame()}>Restart Game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2> Question {currentQuestion + 1 } out of {questions.length}</h2>
          <h3 className="question-text"> {questions[currentQuestion].question}</h3>

          <ul>
           {questions[currentQuestion].options.map((option)=>{
            return(
              <li onClick={() => optionClicked(option.isCorrect) } key={option.id}>
                   {option.text}
              </li>
            )
           })}  
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
