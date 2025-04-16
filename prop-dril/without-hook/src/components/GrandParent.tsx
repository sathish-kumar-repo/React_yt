import { Parent } from "./Parent";

export const GrandParent = () => {
  const data = "Hello from Grandparent";
  return (
    <div className="box">
      <h3>GrandParent</h3>
      <Parent data={data} />
    </div>
  );
};
