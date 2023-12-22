import { useState } from "react";

//Note: I already created another component for feedback
// and wrote codes here to show more clear
const Statistics = ({
  good,
  natural,
  bad,
  totalFeedback,
  positivePercentage,
  average,
}) => {
  return (
    <div>
      <h1>Statistics</h1>

      {totalFeedback ? (
        <div>
          <h2>Good: {good}</h2>
          <h2>Neutral: {natural}</h2>
          <h2>Bad: {bad}</h2>
          <h2>all : {totalFeedback}</h2>

          <h2>Average: {average}</h2>
          <h2>Positive: {positivePercentage}%</h2>
        </div>
      ) : (
        <p>Not feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
