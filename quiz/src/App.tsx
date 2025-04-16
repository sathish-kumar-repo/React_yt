import { useEffect, useState } from "react";
import "./App.css";
import questionData from "./question.json";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(10);

  const quiz = questionData[currentQuestion];

  useEffect(() => {
    let interval: number;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      // clearInterval(interval);
      setShowScore(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, score]);

  function handleAnswerClick(selectedOption: string) {
    if (selectedOption === quiz.correctOption) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion < questionData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimer(10);
    } else {
      setShowScore(true);
    }
  }
  function handleRestartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(10);
  }

  return (
    <>
      <div className="quiz-app">
        {showScore ? (
          <div className="score-section" /*style={{ display: "none" }}*/>
            <h2>
              Your Score: {score}/{questionData.length}
            </h2>
            <button onClick={handleRestartQuiz}>Restart</button>
          </div>
        ) : (
          <div className="question-section">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{quiz.question}</p>

            <div className="options">
              {quiz.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>

            <div className="timer">
              Time Left: <span>{timer}s</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
