import Header from "./components/Header";
import "./App.css";
import Total from "./components/Total";
import Content from "./components/Content";
import { useState } from "react";


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
   price:120
 };
 const {name, parts}= course
 const [good, setGood] = useState(0);
 const [natural, setNatural] = useState(0);
 const [bad, setBad] = useState(0);



  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    <hr />
    
      <p>Give feedback</p>
      <button onClick={()=>{setGood(good+1)}}>Good</button>
      <button onClick={()=>{setNatural(natural + 1)}}>neutral</button>
      <button onClick={()=>{setBad(bad + 1)}}>bad</button>
      <h2>good{good}</h2>
      <h2>natural{natural}</h2>
      <h2>bad{bad}</h2>
      </div>
    
  );
}

export default App;
