import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

const Header = (props) => {
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}


const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts=[
    {
      name:'Fundamentals of React',
      exercises: 10
    },  
   {
      name:'Using props to pass data',
      exercises: 7
    },  
    {
      name:'State of a component',
      exercises: 14
    }
  ] 

  /*This can be done differently */
  /*let total = parts.exercises;*/


  
  return (
    <div>
      <Header course ={course}/>

      <Content parts = {parts}/>
    
    </div>
  )
}

export default App;
