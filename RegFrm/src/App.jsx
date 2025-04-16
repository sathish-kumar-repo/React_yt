import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Ram",
    age: 25,
    gender: "Male",
    isMarried: true,
    country: "UK",
    bio: "Write Something Yourself",
  });

  function changeHandler(e) {
    const name = e.target.name;
    // console.log(e.target.value);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({ ...user, [name]: value });
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Marital Status</td>
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{user.country}</td>
          </tr>
          <tr>
            <td>Bio</td>
            <td>{user.bio}</td>
          </tr>
        </tbody>
      </table>
      <form>
        <input
          type="text"
          placeholder="Fullname"
          name="name"
          value={user.name}
          onChange={changeHandler}
        />

        <input
          type="number"
          placeholder="Age"
          name="age"
          value={user.age}
          onChange={changeHandler}
        />

        <div className="gender">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              checked={user.gender == "Male"}
              onChange={changeHandler}
              value="Male"
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              checked={user.gender == "Female"}
              onChange={changeHandler}
              value="Female"
            />
            Female
          </label>
        </div>

        <label htmlFor="isMarried">
          <input
            type="checkbox"
            id="isMarried"
            checked={user.isMarried}
            name="isMarried"
            onChange={changeHandler}
          />
          is Married
        </label>

        <div className="select-div">
          <label htmlFor="country">Select Country</label>
          <select
            name="country"
            id="country"
            value={user.country}
            onChange={changeHandler}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="10"
          placeholder="Write about You"
          value={user.bio}
          onChange={changeHandler}
        />
      </form>
    </>
  );
}

export default App;
