import "./App.css";
import { ArraySample } from "./components/ArraySample";
import { ChildComponent } from "./components/ChildComponent";
import { FunctionSample } from "./components/FunctionSample";
import { MultiTypeComponent } from "./components/MultiTypeComponent";
import { OneOfSample } from "./components/OneOfSample";
import { Student } from "./components/Student";

function App() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <h1>props and propTypes</h1>
      <Student name="Sathish Kumar" age={17} isMarried={false} />
      <Student name="Ram Kumar" age={35} isMarried={true} />
      <Student name="Sam Kumar" age={12} isMarried={false} />

      <h1> props.children</h1>
      <ChildComponent>
        <p>This is sample para 1</p>
        <p>This is sample para 2</p>
        <p>This is sample para 3</p>
        {/*This is properties*/}
      </ChildComponent>

      <h1>Passing array in props</h1>
      <ArraySample items={items} />

      <h1>use oneOf</h1>
      <OneOfSample color="green" />
      {/* <OneOfSample color="orange" /> */}

      <h1>use oneOfType</h1>
      <MultiTypeComponent value="Hello" />
      <MultiTypeComponent value={42} />
      <MultiTypeComponent value={true} />

      <h1>Passing Functions</h1>
      <FunctionSample handleClick={handleClick} />
    </>
  );
}

export default App;
