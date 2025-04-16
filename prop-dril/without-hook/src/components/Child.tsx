import { MouseEventHandler } from "react";

export const Child = ({
  data,
  handleClick,
}: {
  data: string;
  handleClick: MouseEventHandler;
}) => {
  return (
    <div className="box">
      <h3>Child</h3>
      <p>{data}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
