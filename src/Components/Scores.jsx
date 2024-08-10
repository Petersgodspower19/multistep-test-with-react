import React from 'react'

function Scores({score, length}) {
    const styles = {
        textAlign: "center"
    }

    
  return (
    <div className='test-details' style={styles}>
    <img  src={score < 5? "./src/assets/dissapointment.png" : "./src/assets/happy.png"} alt='' />
      <h3>You scored {score} out of {length}.</h3>
      <p>Refresh the page to retake the test</p>
    </div>
  )
}

export default Scores
