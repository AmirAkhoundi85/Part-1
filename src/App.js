import Header from "./components/Header";
import "./App.css";
import Total from "./components/Total";
import Content from "./components/Content";
import { useState } from "react";
import Statistics from "./components/Statistics";

function App() {
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

  const handleFeedback = (score) => {
    setTotalFeedback(totalFeedback + 1);
    setTotalScore(totalScore + score);
  };

  const calculatePositivePercentage = () => {
    return  totalFeedback ? (good / totalFeedback) * 100 : 0;
  };

  const calculateAvrage = () => {
     return (totalScore / totalFeedback);
  };

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
    </div>
  );
}

export default App;
