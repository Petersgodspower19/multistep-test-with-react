import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home ';
import Quiz from './Quiz';
import questionAndAnswer from './questionArray';
import Scores from './Components/Scores';
function App() {
  const [page, setPage] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    if (selectedOption === questionAndAnswer[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestionIndex < questionAndAnswer.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      
    }
  };

  

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
    }
  };
 const numberOfQuestions = questionAndAnswer.length;

 
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const addToPageCount = () => {
    setPage(page + 1);
  };
  const confirmSubit = () => {
    Swal.fire({
      title: "Are you sure you want to submit?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff6f61",
      cancelButtonColor: "#d33",
      confirmButtonText: "Submit"
    }).then((result) => {
      if (result.isConfirmed) {
        setPage(3);
      }
    });
  }

  return (
    <div className="App">
      {page === 1 && <Home addToPageCount={addToPageCount} />}
      {page === 2 && <Quiz confirmSubit={confirmSubit} 
      handleOptionChange={handleOptionChange}
     handleNext={handleNext} 
      handlePrevious={handlePrevious}
      setCurrentQuestionIndex={setCurrentQuestionIndex}
      currentQuestionIndex={currentQuestionIndex}
      score={score}
      setScore={setScore}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      questionAndAnswer={questionAndAnswer} />}
      {page === 3 && <Scores score={score} length={numberOfQuestions} />}
    </div>
  );
}

export default App;
