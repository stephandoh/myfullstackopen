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
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  let total = exercises1 + exercises2 + exercises3;


  
  return (
    <div>
      <Header course ={course}/>

      <Content part1 = {part1}  exercises1 = {exercises1} />
      <Content part2 = {part2}  exercises2 = {exercises2} />
      <Content part1 = {part3}  exercises1 = {exercises3} />

      <Total  total = {total} />
    </div>
  )
}

export default App;
