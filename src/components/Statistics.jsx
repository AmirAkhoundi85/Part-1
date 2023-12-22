import StatisticLine from "./StatisticLine";

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
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Natural" value={natural} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={totalFeedback} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positivePercentage} />
          </tbody>
        </table>
      ) : (
        <p>Not feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
