import "./App.css";
import { useState } from "react";

//Header reusable component
const Title = (props) => <h1>{props.title}</h1>;

//Button reusable component
const Button = (props) => {
  const increase = () => props.updateState(props.state + 1);
  return <button onClick={increase}>{props.text}</button>;
};

// reusable components for actual statistical values
const Num = (props) => {
  const text = props.text;
  const value = props.value;
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

//Statistics reusable component
const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = all / 3;
  const positive = (props.good / all) * 100;
  if (all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <>
      <Num text="good" value={props.good} />
      <Num text="neutral" value={props.neutral} />
      <Num text="bad" value={props.bad} />
      <Num text="all" value={all} />
      <Num text="average" value={average} />
      <Num text="positive" value={positive + " %"} />
    </>
  );
};

//app to collect vote data
const App = (props) => {
  //set good, neutral and bad props
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title title="give feedback" />
      <Button state={good} updateState={setGood} text="good" />
      <Button state={neutral} updateState={setNeutral} text="neutral" />
      <Button state={bad} updateState={setBad} text="bad" />
      <Title title="Statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
