import './App.css';
import Intro from '../Intro';
import { useEffect, useState } from 'react';
import Series from '../../container/series';



function App() {
    

  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Series List</h1>
      </header>
        <Intro message = "Here you can find all of you most loved series"/>
       
       <Series />
        <a href="https://www.udemy.com/course/react-fundamentals/learn/lecture/8895862#overview">
          Link to course
          </a> 
    </div>
  );
}

export default App;
