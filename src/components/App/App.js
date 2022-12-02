import './App.css';
import Main from '../../Main';
import { Link } from 'react-router-dom';



function App() {
    

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className='header link'>
        <h1 className="header">TV Series List</h1>
        </Link>
      </header>       
       <Main />
        <a href="https://www.udemy.com/course/react-fundamentals/learn/lecture/8895862#overview">
          Link to course
          </a> 
    </div>
  );
}

export default App;
