import React, { useState } from "react";
import "./App.css";

function App() {
  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "I see myself as a successful person.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I can control my excitement around other people.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I can deal with difficulties in life.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I do not hesitate to participate in social events.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I can express myself comfortably.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I do not hesitate to take responsibility.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I love myself.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Self Reliance App</h1>
        <h2>Current Score :{score}</h2>

        {showFinalResult ? (
          <div className="result">
            <h1>Result</h1>
            <h2>1 out of 7 self confident</h2>
            <button>Restart Test</button>
          </div>
        ) : (
          <div className="question-card">
            <h2>Question 1 out of 7</h2>
            <h3>I see myself as a succesfull person.</h3>
            <ul>
              <li>never</li>
              <li>rarely</li>
              <li>often</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
