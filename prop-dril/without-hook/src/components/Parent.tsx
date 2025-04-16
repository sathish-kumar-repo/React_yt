import { Child } from "./Child";

export const Parent = (props: { data: string }) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="box">
      <h3>Parent</h3>
      <Child data={props.data} handleClick={handleClick} />
    </div>
  );
};
