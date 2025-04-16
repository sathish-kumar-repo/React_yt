import { useEffect, useRef } from "react";

const UsingRef: React.FC = () => {
  const countRef = useRef<number>(0);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    console.log("UseRef Component Rendered");
  });

  function handleClick() {
    if (spanRef.current) {
      countRef.current++;
      spanRef.current.innerText = countRef.current.toString();
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        useRef <span ref={spanRef}>{countRef.current}</span>
      </button>
    </div>
  );
};

export default UsingRef;
