const Total = ({ parts }) => {
  let total = 0;
  parts.map((item) => {
    return (total += item.exercises);
  });
  return <div>Number of exercises {total}</div>;
};
export default Total;
