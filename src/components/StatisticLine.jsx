import React from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <>
      {text == "Positive" ? (
        <h2>
          {text}: {value} %
        </h2>
      ) : (
        <h2>
          {text}: {value}
        </h2>
      )}
    </>
  );
}

export default StatisticLine