import { useRef } from "react";

const FocusRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    inputRef.current!.focus();
    inputRef.current!.style.backgroundColor = "grey";
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default FocusRef;
