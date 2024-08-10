import React from 'react';
import Header from './Header';

function Home({ addToPageCount }) {
  return (
    <div>
      <Header text={"Welcome!"} />
      <div className='test-details'>
        <h2>You are about to start the test.</h2>
        <p>A total of 10 questions. You have the chance to go back and modify your answers.</p>
        <p>At the end of the test, your score will be displayed on the screen.</p>
        <button onClick={addToPageCount}>Start Test</button>
      </div>
    </div>
  );
}

export default Home;
