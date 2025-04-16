import { useEffect, useState } from "react";
import "./App.css";

//* useEffect(() => {
//*   first - The code that we want to run
//*
//*   return () => {
//*     second - Optional return function (Cleanup Function)
//*   }
//* }, [third]) - Dependency array

function App() {
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(0);

  //! No Dependency State (ethaiyum poruptuthathu)
  useEffect(() => {
    console.log("I am No Dependencies useEffect");
    //*   Call two times because it is working in local using debug but in real time call only onces, why reason: Because the main program run safe mode so it render double time
  });

  // or
  console.log("I am from outside"); //! Don't use this

  //! Dependency State
  //* Empty Dependency array (It's only call when its first time mount)
  useEffect(() => {
    console.log("I am Empty Dependencies useEffect");
  }, []);

  //* State Dependency array
  useEffect(() => {
    console.log("I am State Dependencies useEffect");
  }, [times]);

  // ! On Mount Cleanup Code
  useEffect(() => {
    console.log("Mounted");
    return () => console.log("Un-Mounted");
  }, []);

  // ! Re-render Cleanup Code
  useEffect(() => {
    console.log("Re-render");
    return () => console.log("Re-render Cleanup");
  });

  // ! State Counter Cleanup Code
  useEffect(() => {
    console.log("I am State Counter");
    return () => console.log("State Counter Cleanup");
  }, [count]);

  // ! Cleanup Example
  useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    const timer = setInterval(() => {
      console.log(`${random} - Re-render`);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((value) => value - 1)}>-</button>
      <button onClick={() => setCount((value) => value + 1)}>+</button>

      <h3>Times: {times}</h3>
      <button onClick={() => setTimes((value) => value - 1)}>-</button>
      <button onClick={() => setTimes((value) => value + 1)}>+</button>
    </>
  );
}

export default App;
