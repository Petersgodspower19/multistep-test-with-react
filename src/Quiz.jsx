import React, { useState } from 'react';
import Header from './Components/Header';
function Quiz({confirmSubit,handleNext, handlePrevious, handleOptionChange,
     currentQuestionIndex,
      setCurrentQuestionIndex,
       score, setScore, selectedOption, setSelectedOption, questionAndAnswer, length}) {

      // if(currentQuestionIndex < 1 || currentQuestionIndex === numberOfQuestions ) {
      //   document.getElementById("prevButton").style.display = "none";
      //   document.getElementById("nextButton").style.display = "none";
      // } 
const styles =  {
  display: "none"
}
  return (
    <div>
      <Header text={"Quiz"} />
      <div className='test-details'>
        <h2>{questionAndAnswer[currentQuestionIndex].question}</h2>
        <div className='answer'>
          {questionAndAnswer[currentQuestionIndex].options.map((option, index) => (
            <button className='answer-btns'
              key={index}
              onClick={() => handleOptionChange(option)}
              style={{
                backgroundColor: selectedOption === option ? 'lightblue' : 'grey'
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <div className='buttons'>
        <button id='prevButton' onClick={handlePrevious} style={currentQuestionIndex < 1? styles: null}>Prev</button>
          <button id='nextButton' onClick={handleNext}>Next</button>
        </div>
        <button className='submit-btn' onClick={confirmSubit} style={currentQuestionIndex > length? styles: null}>Submit</button>
      </div>
    </div>
  );
}

export default Quiz;
