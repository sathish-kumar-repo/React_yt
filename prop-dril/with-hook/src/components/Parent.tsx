import { Child } from "./Child";

export const Parent = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="box">
      <h3>Parent</h3>
      <Child handleClick={handleClick} />
    </div>
  );
};
