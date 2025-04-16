import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [advice, setAdvice] = useState("Please Click Button to Get Advice");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");

    const data = await res.json();
    // console.log(data);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  // It's call when change user component
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="advice-app">
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
      <Counter count={count} />
    </div>
  );
}

export default App;
