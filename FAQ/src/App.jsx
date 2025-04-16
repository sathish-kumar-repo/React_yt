import "./App.css";
import FaqItem from "./components/FaqItem";
import data from "./data";

function App() {
  return (
    <div className="faq-accordion">
      <h2>FAQs</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default App;
