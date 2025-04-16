import { useEffect, useState } from "react";

const UsingState = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("UseState Component Rendered");
  });

  function handleClick() {
    setNumber((n) => n + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        useState <span>{number}</span>
      </button>
    </div>
  );
};

export default UsingState;
