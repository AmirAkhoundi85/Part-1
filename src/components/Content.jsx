import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((item) => (
        <Part name={item.name} exercises={item.exercises} />
      ))}
    </div>
  );
};
export default Content;
