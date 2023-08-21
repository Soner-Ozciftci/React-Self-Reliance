import React , {useState} from 'react';
import './App.css';

function App() {

const [ showFinalResult,setFinalResult]=useState(false);
const [score,setScore]=useState(0);
const [currentQuestion,setCurrentQuestion]= useState(0);

  return (
    <div className="App">
<div className='container'>
<h1>Self Reliance App</h1>
<h2>Current Score :{score}</h2>

{
  showFinalResult ? 
<div className='result'>
  <h1>Result</h1>
  <h2>
    1 out of 7 self confident
  </h2>
  <button>Restart Test</button>
</div>
:
<div className='question-card'>
<h2>Question 1 out of 7</h2>
<h3>I see myself as a succesfull person.</h3>
<ul>
  <li>never</li>
  <li>rarely</li>
  <li>often</li>
</ul>
</div>
}



</div>
    </div>
  );
}

export default App;
