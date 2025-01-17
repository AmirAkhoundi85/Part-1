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


  let points={}
 anecdotes.forEach((item, index)=> points[index]=0)
//  {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0}
  const [votes, setVotes] = useState(points);
  const [randomIndex, setRandomIndex] = useState(0);
  

  const randomHandler = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setRandomIndex(randomNum);
  };

  const vote = () => {
   setVotes(  {...votes, [randomIndex]: votes[randomIndex]+1}  )
  };
  const calculateMaxIndex = ()=>{
    const values = Object.values(votes); ///[0,1,3,0,0,2,1.0]
    const maxValue = Math.max(...values);
    return values.indexOf(maxValue);
  }

  return (
    <div>
      <div>
        <h1>Anecodet of the day</h1>
        <p>{anecdotes[randomIndex]}</p>
        <p>Has {votes[randomIndex]} votes</p>
        <button onClick={vote}>Vote</button>
        <button onClick={randomHandler}>Next anecdotes</button>
      </div>
      <div>
        <h2>Anecodet with most votes</h2>
        <p>{anecdotes[calculateMaxIndex()]}</p>
        <p>Has {votes[calculateMaxIndex()]} votes</p>
      </div>
    </div>
  );
}

export default App;
