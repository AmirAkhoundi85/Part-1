import { useState } from "react";

const Feedback = () => {
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
    return totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;
  };

  return (
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
      <h2>Good: {good}</h2>
      <h2>Neutral: {natural}</h2>
      <h2>Bad: {bad}</h2>
      <h2>all : {good + natural + bad}</h2>
      <h2>Average: {totalFeedback === 0 ? 0 : totalScore / totalFeedback}</h2>
      <h2>Positive: {calculatePositivePercentage()}%</h2>
    </div>
  );
};

export default Feedback;
