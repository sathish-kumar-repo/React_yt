import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
  return (
    <p>
      You have read <b>{props.count}</b> pieces of advice
    </p>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
};

export default Counter;
