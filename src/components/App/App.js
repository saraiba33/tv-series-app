import './App.css';
import Intro from '../Intro';
import { useState } from 'react';



function App() {
  const [series, setSeries] = useState([]);
  const newState = () => setSeries(["Vikings", "The Last Kingdom"])
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Series List</h1>
      </header>
        <Intro message = "Here you can find all of you most loved series"/>
       <p>The length of series array - {series.length }</p>
        <a href="https://www.udemy.com/course/react-fundamentals/learn/lecture/8895862#overview">
          Link to course
          </a> 
    </div>
  );
}

export default App;
