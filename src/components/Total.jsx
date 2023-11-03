const Total = ({ exercises1, exercises2, exercises3 }) => {
  const total = exercises1 + exercises2 + exercises3;
  return <div>Number of exercises {total}</div>;
};
export default Total;