import { MouseEventHandler, useContext } from "react";
import { GrandContext } from "./GrandParent";

export const Child = ({ handleClick }: { handleClick: MouseEventHandler }) => {
  const value = useContext<string>(GrandContext);

  return (
    <div className="box">
      <h3>Child</h3>
      <p>{value}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
