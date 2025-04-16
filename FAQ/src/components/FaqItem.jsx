import React from "react";
import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const togleShow = () => {
    setShow(!show);
  };
  return (
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={togleShow}>
        {question}
      </div>

      <div className="faq-item-body">
        <div className="faq-item-body-content">{answer}</div>
      </div>
    </div>
  );
};

export default FaqItem;
