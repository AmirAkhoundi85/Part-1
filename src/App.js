import Header from "./components/Header";
import Part from "./components/Part";
import "./App.css";
import Total from "./components/Total";


function App() {
  return (
    <>
      <Header />
      <Part name="Fundamentals of React" exercises={10} />
      <Part name="Using props to pass data" exercises={7} />
      <Part name="State of a component" exercises={14} />

      <Total exercises1={10} exercises2={7} exercises3={14} />
    </>
  );
}

export default App;

