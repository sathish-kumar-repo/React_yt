// Consider this is child component

import PropTypes from "prop-types";

export const Student = (props) => {
  return (
    <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>isMarried</th>
            <td>{props.isMarried ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
};

Student.defaultProps = {
  name: "No name",
  age: 0,
  isMarried: false,
};

/**
 * props is used to pass any to value or properties to parent and get value in child
 * propTypes is used to validate the data.. if supposed the data is number..you give string then show error in debug console but not is UI(Website)
 */
