import Header from "./components/Header";
import "./App.css";
import Total from "./components/Total";
import Content from "./components/Content";
import { useState } from "react";
import Statistics from "./components/Statistics";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
    price: 120,
  };
  const { name, parts } = course;

  const [good, setGood] = useState(0);
  const [natural, setNatural] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [currentAnecdote, setCurrentAnecdote]= useState(" ")

  

  const handleFeedback = (score) => {
    setTotalFeedback(totalFeedback + 1);
    setTotalScore(totalScore + score);
  };

  const calculatePositivePercentage = () => {
    const result = (good / totalFeedback) * 100;
    return Math.round(result * 100) / 100;
  };

  const calculateAvrage = () => {
    const result = totalScore / totalFeedback;
    return Math.round(result * 100) / 100;
  };
  const randomHandler = ()=>{
     const randomIndex = Math.floor(Math.random() * anecdotes.length);
     setCurrentAnecdote(anecdotes[randomIndex]);
  }

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
      <hr />

      <div>
        <p>Give feedback</p>
        <button
          onClick={() => {
            setGood(good + 1);
            handleFeedback(1);
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            setNatural(natural + 1);
            handleFeedback(0);
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            setBad(bad + 1);
            handleFeedback(-1);
          }}
        >
          Bad
        </button>
      </div>

      <Statistics
        good={good}
        natural={natural}
        bad={bad}
        totalFeedback={totalFeedback}
        positivePercentage={calculatePositivePercentage()}
        average={calculateAvrage()}
      />
      <div>
        <p>{currentAnecdote}</p>
        <button onClick={randomHandler}>Next anecdotes</button>
      </div>
    </div>
  );
}

export default App;
