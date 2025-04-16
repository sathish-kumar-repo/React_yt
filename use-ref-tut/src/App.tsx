import "./App.css";
import FocusRef from "./components/FocusRef";
import UsingRef from "./components/UsingRef";
import UsingState from "./components/UsingState";

function App() {
  return (
    <>
      <UsingState />
      <hr />
      <UsingRef />
      <hr />
      <FocusRef />
    </>
  );
}

export default App;
