import { createContext } from "react";
import { Parent } from "./Parent";

export const GrandContext = createContext<string>();

export const GrandParent = () => {
  const data = "Hello from Grandparent Hi";
  return (
    <div className="box">
      <h3>GrandParent</h3>
      <GrandContext.Provider value={data}>
        <Parent />
      </GrandContext.Provider>
    </div>
  );
};
